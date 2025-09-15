import { Request, Response, NextFunction } from 'express';
import { Router } from 'express';
import multer from 'multer';
import pool from './models/db';

const router: Router = Router();
const upload = multer({ dest: 'uploads/' });

// upload avatar
router.post(
  "/avatar/:id",
  upload.single("avatar"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const file = req.file;
      const userId = req.params.id;

      if (!file) {
        return res.status(400).json({ error: "Please upload a file" });
      }

      // เก็บ path หรือ filename ลง DB
      // ถ้า MySQL/MariaDB
      const [rows] = await pool.query(
        `
        UPDATE users 
        SET us_avatar = ? 
        WHERE us_id = ?
      `,
        [file.filename, userId]
      );

      res.json({
        message: "File uploaded and saved to DB",
        file: {
          original: file.originalname,
          stored: file.filename,
          path: file.path,
        },
      });
    } catch (err) {
      next(err);
    }
  }
);

// upload หลายรูป
router.post(
  "/photos/:id",
  upload.array("photos", 12),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const files = req.files as Express.Multer.File[];
      const userId = req.params.id;

      if (!files || files.length === 0) {
        return res.status(400).json({ error: "Please upload files" });
      }

      // ตัวอย่าง: เก็บ filename รวมเป็น JSON
      const filenames = files.map((f) => f.filename);

      await pool.query(
        `
        UPDATE users
        SET us_photos = ?
        WHERE us_id = ?
      `,
        [JSON.stringify(filenames), userId]
      );

      res.json({
        message: "Files uploaded and saved to DB",
        files: filenames,
      });
    } catch (err) {
      next(err);
    }
  }
);

export default router;
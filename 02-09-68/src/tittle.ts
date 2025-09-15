import { Request, Response, NextFunction } from 'express';
import { Router } from 'express';
import pool from './models/db';
import { Title } from './models/title.model';

const router: Router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const conn = await pool.getConnection();
        conn.release();
        res.json({ message: 'API is working' });
    } catch (err) {
        next(err);
    }
});

router.get('/titles', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const [rows] = await pool.query<Title[]>(`
            SELECT * FROM titles
        `);

        res.json(rows);
    } catch (err) {
        next(err);
    }
});

router.get('/title/:id', async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
        const [rows] = await pool.query<Title[]>(`
            SELECT * FROM titles
            WHERE tit_id = ?
        `, [id]);

        res.json(rows);
    } catch (err) {
        next(err);
    }
});

router.post('/title', async (req: Request, res: Response, next: NextFunction) => {
    const { id, title } = req.body;
    try {
        const store = await pool.query(`
            INSERT INTO titles(tit_id, tit_name)
            VALUES(?, ?)
        `, [id, title]);

        const [rows] = await pool.query<Title[]>(`
            SELECT * FROM titles
            WHERE tit_id = ?
        `, [id]);

        res.json(rows[0]);
    } catch (err) {
        next(err);
    }
});

router.put('/title/:id', async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const title = req.body.title;
    try {
        const store = await pool.query(`
            UPDATE titles
            SET tit_name = ?
            WHERE tit_id = ?
        `, [title, id]);

        const [rows] = await pool.query<Title[]>(`
            SELECT * FROM titles
            WHERE tit_id = ?
        `, [id]);

        res.json(rows[0]);
    } catch (err) {
        next(err);
    }
});

router.delete('/title/:id', async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const store = await pool.query(`
            DELETE FROM titles
            WHERE tit_id = ?
        `, [id]);
        res.send(`Delete title with ID: ${id}`);
    } catch (err) {
        next(err);
    }
});

export default router;
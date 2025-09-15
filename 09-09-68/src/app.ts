import { Router } from 'express';
import tittleRouter from './tittle';
import multerRouter from './multer';

const router: Router = Router();

router.use('/api' ,tittleRouter)
router.use('/api' ,multerRouter)

export default router;
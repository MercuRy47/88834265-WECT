import { Router } from 'express';
import tittleRouter from './tittle';

const router: Router = Router();

router.use('/api' ,tittleRouter)

export default router;
import { Router } from 'express';
import getTipoCambio from '../controllers/tipoCambio';

const router = Router();

router.get('/', getTipoCambio);

export default router;

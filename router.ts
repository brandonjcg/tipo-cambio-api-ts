import { Request, Response, Router } from 'express';

const router = Router();

router.route('/api/v1/').get((req: Request, res: Response) => res.status(200).json({
  success: true,
  message: 'Hello world from the Tipo de cambio API 🚀',
}));

export default router;

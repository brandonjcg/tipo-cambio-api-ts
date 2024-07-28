import { Request, Response, Router } from 'express';
import ExchangeRateController from './controllers/exchanngeRate.controller';
import ExchangeRateRepository from './repositories/exchangeRate.repository';

const router = Router();

const prefix = '/api/v1';

router.route(prefix).get((req: Request, res: Response) => res.status(200).json({
  success: true,
  message: 'Hello world from the Tipo de cambio API 🚀',
}));

const controller = new ExchangeRateController(new ExchangeRateRepository());

router.post(`${prefix}/exchange_rate`, controller.create.bind(controller));
router.get(`${prefix}/exchange_rate`, controller.list.bind(controller));
router.get(`${prefix}/exchange_rate/:id`, controller.get.bind(controller));
router.put(`${prefix}/exchange_rate/:id`, controller.update.bind(controller));
router.delete(`${prefix}/exchange_rate/:id`, controller.remove.bind(controller));

export default router;

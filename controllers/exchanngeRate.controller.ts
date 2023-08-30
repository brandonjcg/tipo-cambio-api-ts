import { Request, Response } from 'express';

import ExchangeRate from '../classes/ExchangeRate';
import { DatabaseRepository } from '../declarations';
import { sendGenericError, sendGenericSuccess } from '../helpers';

export default class ExchangeRateController {
  constructor(private repository: DatabaseRepository<ExchangeRate>) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;

      const exchangeRate = await this.repository.create(body);

      sendGenericSuccess(res, {
        data: exchangeRate,
      });
    } catch (error: any) {
      sendGenericError(res, error);
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.repository.list();

      sendGenericSuccess(res, {
        data,
      });
    } catch (error: any) {
      sendGenericError(res, error);
    }
  }

  async get(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const data = await this.repository.get(id);

      sendGenericSuccess(res, {
        data,
      });
    } catch (error: any) {
      sendGenericError(res, error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { body } = req;

      const data = await this.repository.update(id, body);

      sendGenericSuccess(res, {
        data,
      });
    } catch (error: any) {
      sendGenericError(res, error);
    }
  }

  async remove(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const data = await this.repository.remove(id);

      sendGenericSuccess(res, {
        data,
      });
    } catch (error: any) {
      sendGenericError(res, error);
    }
  }
}

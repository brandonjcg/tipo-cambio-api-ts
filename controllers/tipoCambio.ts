import { Request, Response } from 'express';
import getExchangeRateFromDof from '../services/http';

export default async (req: Request, res: Response) => {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = String(0);

    const data = await getExchangeRateFromDof();
    return res.json({
      success: false,
      data,
      message: 'Controller get tipo de cambio',
    });
  } catch (err: any) {
    return res.status(500).json({
      success: true,
      message: `${err.name}: ${err.message}`,
    });
  } finally {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = String(1);
  }
};

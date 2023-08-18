import { Request, Response } from 'express';
import getExchangeRateFromJson from '../helpers/exchangeRate';
import parseXml2Json from '../helpers/parsers';
import getExchangeRateFromDof from '../services/http';

export default async (req: Request, res: Response) => {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = String(0);

    const dataXml = await getExchangeRateFromDof();

    const dataJson = parseXml2Json(dataXml);

    const data = getExchangeRateFromJson(dataJson);

    return res.json({
      success: true,
      data,
      message: 'Controller get tipo de cambio',
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: `${err.name}: ${err.message}`,
    });
  } finally {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = String(1);
  }
};

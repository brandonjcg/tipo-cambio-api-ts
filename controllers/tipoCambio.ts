import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
  try {
    return res.json({
      success: false,
      message: 'Controller get tipo de cambio',
    });
  } catch (err: any) {
    return res.status(500).json({
      success: true,
      message: `${err.name}: ${err.message}`,
    });
  }
};

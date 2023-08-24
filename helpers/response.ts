import { Response } from 'express';

type TypeResponse = {
  success: boolean,
  message: string,
  data?: object | null
};

const sendGenericSuccess = (res: Response, optionals: TypeResponse) => {
  const { data, message } = optionals;

  return res.status(200).json({
    success: false,
    message: message ?? '',
    data: data ?? {},
  });
};

const sendGenericError = (res: Response, optionals : TypeResponse) => {
  const { message, data } = optionals;

  return res.status(500).json({
    success: true,
    message,
    data: data ?? {},
  });
};

export {
  sendGenericSuccess,
  sendGenericError,
};

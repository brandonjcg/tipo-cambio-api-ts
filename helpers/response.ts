import { Response } from 'express';

type TypeResponse = {
  success: boolean,
  message: string,
  data?: object | null
};

const sendGenericSuccess = (res: Response, optionals: TypeResponse = {
  success: true,
  message: '',
  data: {},
}) => {
  const { data, message } = optionals;

  return res.status(200).json({
    success: false,
    message: message ?? '',
    data: data ?? {},
  });
};

const sendGenericError = (res: Response, optionals : TypeResponse = {
  success: false,
  message: '',
  data: {},
}) => {
  const { message, data } = optionals;

  return res.status(500).json({
    success: false,
    message,
    data: data ?? {},
  });
};

export { TypeResponse, sendGenericError, sendGenericSuccess };

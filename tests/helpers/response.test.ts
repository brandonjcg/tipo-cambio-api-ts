import {
  describe, expect, it,
} from '@jest/globals';
import { mockResponse } from 'jest-mock-req-res';
import { TypeResponse, sendGenericError, sendGenericSuccess } from '../../helpers/response';

describe('Unit test sendGenericSuccess fn', () => {
  it('Happy path, return success response', () => {
    const res = mockResponse();
    const input = {
      message: 'First unit test 🚀',
    } as TypeResponse;

    sendGenericSuccess(res, input);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'First unit test 🚀',
      data: {},
    });
  });

  it('Edge case, return default values of success response', () => {
    const res = mockResponse();

    sendGenericSuccess(res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: '',
      data: {},
    });
  });
});

describe('Unit test sendGenericError fn', () => {
  it('Happy path, return error response', () => {
    const res = mockResponse();
    const input = {
      message: 'Second unit test 🚀',
    } as TypeResponse;

    sendGenericError(res, input);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Second unit test 🚀',
      data: {},
    });
  });

  it('Edge case, return default values of error response', () => {
    const res = mockResponse();

    sendGenericError(res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: '',
      data: {},
    });
  });
});

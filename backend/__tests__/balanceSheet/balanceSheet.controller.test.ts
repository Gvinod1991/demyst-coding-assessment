
import { getBalanceSheet } from '../../src/balanceSheet/controllers/balanceSheetController';

import { Request, Response, NextFunction } from 'express';

describe('Balance Sheet controller', () => {
  const mockReq = { params: { paymentsOnly: true } } as unknown as Request;
  const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as unknown as Response;
  let next: NextFunction = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 200 and if balance sheet data found', async () => {

    await getBalanceSheet(mockReq, mockRes, next);

    expect(mockRes.status).toHaveBeenCalledWith(200);
  });
});
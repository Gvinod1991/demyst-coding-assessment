import { AxiosResponse } from "axios";
import { getData } from "../../utils/httpClient";
import { paramsType } from "../../types/balanceSheet";

export const fetchXeroBalanceSheet = async (params?: paramsType) => {
  const API_ENDPOINT = process.env.XERO_BALANCE_SHEET_API_ENDPOINT!;

  try {
    const response = await getData(API_ENDPOINT, {}, params);
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch balance sheet: ${error.message}`);
      return;
    }
    throw new Error("Failed to fetch balance sheet");
  }
}
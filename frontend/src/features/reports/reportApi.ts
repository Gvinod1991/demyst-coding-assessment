import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../utils/baseQuery";
import { ApiResponse } from "../../types/balanceSheetType";

export const reportApi = createApi({
  tagTypes: ["BalanceSheet"],
  baseQuery,
  endpoints: (build) => ({
    // A query endpoint with no arguments
    fetchBalanceSheet: build.query<ApiResponse, void>({
      query: () => `/balance-sheet`,
    })
  }),
});

export const { useFetchBalanceSheetQuery } = reportApi;
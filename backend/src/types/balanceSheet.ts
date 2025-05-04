export type paramsType = {
  paymentsOnly?: boolean;
  date?: string;
  periods?: number;
  timeframe?: 'MONTH' | 'QUARTER' | 'YEAR';
  standardLayout?: boolean;
}
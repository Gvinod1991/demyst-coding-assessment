import { ColumnHelper } from "@tanstack/react-table";
import { Header, BalanceSheetTableColumnType } from "../types/balanceSheetType";

export const generateColumns = (tableHeader: Header[], columnHelperFn: ColumnHelper<BalanceSheetTableColumnType>) => {
  const columns = [
    columnHelperFn.accessor('category', {
      header: 'Category',
      cell: info => info.getValue(),
    }),
    columnHelperFn.accessor('account', {
      header: 'Account',
      cell: info => info.getValue(),
    })
  ];
  tableHeader.filter((header) => header.Value !== 'account').forEach((header) => {
    columns.push(columnHelperFn.accessor(header.Value, {
      header: `${header.Value} (USD)`,
      cell: info => info.getValue(),
    }));
  });
  return columns;
}
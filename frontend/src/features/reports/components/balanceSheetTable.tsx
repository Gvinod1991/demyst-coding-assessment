import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import { generateColumns } from '../../../utils/generateColumns';
import { BalanceSheetTableColumnType, BalanceSheetTableProps } from '../../../types/balanceSheetType';

const columnHelper = createColumnHelper<BalanceSheetTableColumnType>();

export const BalanceSheetTable: React.FC<BalanceSheetTableProps> = ({ tableHeader, tableData }) => {
  const columns = generateColumns(tableHeader, columnHelper);
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} className="border p-2 text-left font-medium text-gray-700">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className="border p-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
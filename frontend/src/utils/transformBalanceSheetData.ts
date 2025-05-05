
import { Cell, Header, Report, Row, Section, BalanceSheetTableColumnType } from "../types/balanceSheetType";

export const transformBalanceSheetData = ({ Reports }: { Reports: Report[] }) => {
  if (Reports.length === 0) return {
    titleData: { reportName: '', reportDate: '', reportTitles: '' },
    tableHeader: [],
    tableData: []
  }
  const reportData = Reports ? Reports : [];
  const { ReportName, ReportDate, ReportTitles } = reportData[0] ?? {};
  const titleData = { reportName: ReportName, reportDate: ReportDate, reportTitles: ReportTitles.join(' ') };
  const tableHeaderData = reportData[0]?.Rows?.find((row) => row.RowType === 'Header')?.Cells?.filter((cell) => cell.Value) ?? [];
  const tableHeader = [{ Value: 'account' }, ...tableHeaderData] as Header[];
  const tableData = reportData[0].Rows.filter((row) => row.RowType === 'Section');
  return { titleData, tableHeader, tableData };
}

export const transFormToTableRows = (tableHeader: Header[], tableData: Section[]) => {
  const tableList = tableData.map((section: Section) => {

    const rows = section.Rows?.map((row: Row, rowIndex: number) => {

      const cellRow = row.Cells.reduce((result, cell: Cell, index) => {
        const { Value } = cell;
        return { ...result, [tableHeader[index].Value]: Value ?? '' }
      }, {});

      if (rowIndex === 0) {
        return {
          category: section.Title,
          ...cellRow
        }
      }

      return {
        category: '',
        ...cellRow
      }

    });
    if (section?.Rows?.length === 0) {
      const cells = tableHeader.reduce((result, header) => {
        return { ...result, [header.Value]: '' }
      }, {})

      const rowData = {
        category: section.Title,
        ...cells
      }
      return rowData;
    }
    return rows
  }).flat(1) as BalanceSheetTableColumnType[];

  return tableList;
}
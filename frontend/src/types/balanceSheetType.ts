interface Header {
  Value: string;
};

interface Attributes {
  Value: string;
  Id: string;
}

interface Cell {
  Value: string;
  Attributes?: Attributes[];
}

interface Row {
  RowType: string;
  Cells: Cell[];
}

interface Section {
  RowType: string;
  Title?: string;
  Rows?: Row[] | [];
  Cells?: Cell[];
}

interface Report {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: string[];
  ReportDate: string;
  UpdatedDateUTC: string;
  Fields: never[];
  Rows: Section[];
}

interface BalanceSheetTableColumnType {
  category: string;
  account: string;
  [key: string]: string;
}
interface TitleDataType {
  reportName: string;
  reportDate: string;
  reportTitles: string;
}
interface BalanceSheetTableProps {
  tableHeader: Header[];
  tableData: BalanceSheetTableColumnType[];
}
interface ApiResponse {
  Status: string;
  Reports: Report[];
}
export type {
  Header, Attributes, Cell, Row, Section, Report,
  BalanceSheetTableColumnType,
  TitleDataType,
  BalanceSheetTableProps,
  ApiResponse
};
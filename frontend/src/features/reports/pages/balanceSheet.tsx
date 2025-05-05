
import { useMemo } from "react";
import { transformBalanceSheetData, transFormToTableRows } from "../../../utils/transformBalanceSheetData";
import { BalanceSheetTable } from "../components/balanceSheetTable";
import { useFetchBalanceSheetQuery } from "../reportApi";
import { Loader } from "../../../components/Loader";
import { Header } from "../components/header";

export const BalanceSheet = () => {
  const { data: balanceSheetData, error, isLoading } = useFetchBalanceSheetQuery();
  const { titleData, tableHeader, tableData } = useMemo(() => transformBalanceSheetData({ Reports: balanceSheetData?.Reports ?? [] }), [balanceSheetData]);
  const data = useMemo(() => transFormToTableRows(tableHeader, tableData), [tableHeader, tableData]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>Failed to fetch balance sheet</div>}
      {
        <div className="overflow-auto">
          {titleData.reportTitles ? <Header headerInfo={titleData.reportTitles} /> : null}
          <div className="p-4">
            {data.length > 0 &&
              <BalanceSheetTable tableHeader={tableHeader} tableData={data} />
            }
          </div>
        </div>
      }
    </>
  );
}
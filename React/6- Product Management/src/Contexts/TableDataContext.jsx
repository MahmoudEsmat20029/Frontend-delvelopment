import { createContext, useContext, useState, useEffect } from "react";

const TableDataContext = createContext([]);

const intialTableData = JSON.parse(localStorage.getItem("tableData")) || [];

export default function TableDataProvider({ children }) {
  const [tableData, setTableData] = useState(intialTableData);

  // Sync with localStorage automatically
  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
  }, [tableData]);

  return (
    <TableDataContext.Provider value={{ tableData, setTableData }}>
      {children}
    </TableDataContext.Provider>
  );
}

export const useTableData = () => useContext(TableDataContext);

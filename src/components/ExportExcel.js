import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import * as XLSX from 'xlsx';
import './ExportExcel.css'; // ไฟล์ CSS แยก

export const ExportExcel = () => {
  const { transactions } = useContext(GlobalContext);

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');
    XLSX.writeFile(workbook, 'transactions.xlsx');
  };

  return (
    <div className="export-container">
      <button className="btn export-btn" onClick={handleExport}>
        Export to Excel
      </button>
    </div>
  );
};

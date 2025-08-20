import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { ExpenseChart } from './components/ExpenseChart';
import { ExportExcel } from './components/ExportExcel';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header /> 
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <ExpenseChart /> {/* เพิ่มกราฟ */}
        <TransactionList />
        <AddTransaction />
        <ExportExcel /> {/* เพิ่มปุ่ม Export Excel */}
      </div>
    </GlobalProvider>
  );
}

export default App;

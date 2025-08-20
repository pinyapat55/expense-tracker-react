import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions
          .slice(0) // ทำ copy array ไว้ก่อน
          .sort((a, b) => a.id - b.id) // ✅ เรียงจากน้อยไปมาก (1 อยู่บน)
          .map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </>
  );
};

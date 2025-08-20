import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './AddTransaction.css';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Food');

  const { addTransaction, transactions } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    // id เรียงตามจำนวน transaction ปัจจุบัน
    const newId = transactions.length + 1;

    const newTransaction = {
      id: newId,
      text,
      amount: +amount,
      date: date || new Date().toLocaleDateString(),
      category
    };

    addTransaction(newTransaction);

    // Reset input
    setText('');
    setAmount(0);
    setDate('');
    setCategory('Food');
  };

  return (
    <>
      <h3>Add New Record</h3>
      <form onSubmit={onSubmit} className="add-transaction-form">
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Salary">Salary</option>
            <option value="Bonus">Bonus</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Housing">Housing</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button className="btn add-btn">Add</button>
      </form>
    </>
  );
};

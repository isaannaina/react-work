import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div className="new-expense">
      <h1>My Expenses</h1>
      <ExpenseForm onSaveExpenseData={addExpenseHandler} />
      {expenses.map((expense) => (
        <div key={expense.date.getTime()}>
          <h2>{expense.title}</h2>
          <p>Amount: {expense.amount}</p>
          <p>Date: {expense.date.toISOString()}</p>
        </div>
      ))}
    </div>
  );
}
export default ExpenseList;

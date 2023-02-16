import './A.css';
import React from 'react';

function ExpenseList() {
  const expenses = [
    { name: 'Food', cost: 10, location: 'Restaurant' },
    { name: 'Petrol', cost: 100, location: 'Gas Station' },
    { name: 'Movies', cost: 200, location: 'Cinema' },
  ];

  return (
    <div className="expense-list">
      <h2 className="expense-list__title">Expense Items</h2>
      <ul className="expense-list__items">
        {expenses.map((expense, index) => (
          <li key={index} className="expense-list__item">
            <div className="expense-list__item-name">{expense.name}</div>
            <div className="expense-list__item-cost">{expense.cost} Rs</div>
            <div className="expense-list__item-location">Location: {expense.location}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;


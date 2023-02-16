import React from 'react';

function ExpenseList() {
  const expenses = [
    { name: 'Food', cost: 10 },
    { name: 'Petrol', cost: 100 },
    { name: 'Movies', cost: 200 },
  ];

  return (
    <div>
      <h2>Expense Items</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name} Rs {expense.cost}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

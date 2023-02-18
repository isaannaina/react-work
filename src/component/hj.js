import React from 'react';
import './A.css';

function ExpenseItem(props) {
  return (
    <li className="expense-list__item">
      <div className="expense-list__item-content">
        <div className="expense-list__item-name">{props.name}</div>
        <div className="expense-list__item-cost">
          {props.cost}
          <span className="expense-list__item-currency"> Rs</span>
        </div>
      </div>
      <div className="expense-list__item-date">Date: {props.date}</div>
      <div className="expense-list__item-location">
        Location: {props.location}
      </div>
    </li>
  );
}

function ExpenseDetails(props) {
  return (
    <div className="expense-details">
      <div className="expense-details__title">{props.title}</div>
      <div className="expense-details__amount">{props.amount}</div>
    </div>
  );
}

function ExpenseList(props) {
  const expenses = [
    {
      name: 'Food',
      cost: 10,
      location: 'Restaurant',
      date: '2023-02-18',
    },
    {
      name: 'Petrol',
      cost: 100,
      location: 'Gas Station',
      date: '2023-02-16',
    },
    {
      name: 'Movies',
      cost: 200,
      location: 'Cinema',
      date: '2023-02-14',
    },
  ];

  return (
    <div className="expense-list">
      <div>
        <h2 className="expense-list__title">Expense Items</h2>
      </div>
      <ul className="expense-list__items">
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            name={expense.name}
            cost={expense.cost}
            date={expense.date}
            location={expense.location}
          >
            <ExpenseDetails
              title={expense.name}
              amount={`${expense.cost} Rs`}
            />
          </ExpenseItem>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem';
import  './ExpenseFilter.css'
function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  const filterExpensesHandler = (event) => {
    const year = event.target.value;
    const filteredExpenses = expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
    setFilteredExpenses(filteredExpenses);
  };

  return (
    <div className="new-expense">
      <div>
      <h1>My Expenses</h1>
      <ExpenseForm onSaveExpenseData={addExpenseHandler} />
      <div className='.filter-container'>
        <label>Filter by Year</label>
        <select onChange={filterExpensesHandler}>
          <option value="">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      {filteredExpenses.length > 0
        ? filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              location={expense.location}
            />
          ))
          
        : expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              location={expense.location}
            />
          ))}
    </div>
    </div>
  );
}
export default ExpenseList;

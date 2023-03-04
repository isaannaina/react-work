import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem';
import Chart from './Chart';
import './ExpenseFilter.css';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const filterExpensesHandler = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    const filteredExpenses = expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
    setFilteredExpenses(filteredExpenses);
  };

  // Calculate the total expenses for each year
  const expensesByYear = {};
  expenses.forEach((expense) => {
    const year = expense.date.getFullYear().toString();
    if (!expensesByYear[year]) {
      expensesByYear[year] = 0;
    }
    expensesByYear[year] += expense.amount;
  });

  const maxValue = Math.max(...Object.values(expensesByYear));

  return (
    <div className="new-expense">
      <h1>My Expenses</h1>
      <ExpenseForm onSaveExpenseData={addExpenseHandler} />
      <div className="filter-container">
        <label>Filter by Year</label>
        <select value={selectedYear} onChange={filterExpensesHandler}>
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
        : expenses.length === 1 ? (
            <p>Only single Expense here. Please add more...</p>
          ) : (
            <>
              {Object.entries(expensesByYear).map(([year, total]) => (
                <Chart key={year} value={total} maxValue={maxValue} />
              ))}
              {expenses.map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                  location={expense.location}
                />
              ))}
            </>
          )}
    </div>
  );
}

export default ExpenseList;


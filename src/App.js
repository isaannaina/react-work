import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

function App() {
  const [expenses ,setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={addExpenseHandler} />
    </div>
  );
}

export default App;

import ExpenseDate from "./ExpenseDate";
import '../UI/ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [amount, setAmount] = useState(props.amount);

  const deleteExpenseHandler = () => {
    setIsDeleted(true);
  };

  const changeAmountHandler = () => {
    setAmount(100);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className='expense'>
      <div>
        <div className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${amount}</div>
          </div>
          <div>
            <p>Location: {props.location}</p>
          </div>
          <button onClick={deleteExpenseHandler}>Delete Expense</button>
          <button onClick={changeAmountHandler}>Change Amount</button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;

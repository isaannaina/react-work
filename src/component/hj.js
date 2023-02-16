import './A.css';

function App(props) {
  const expenses = [
    { name: 'Food', cost: 10, location: 'Restaurant' },
    { name: 'Petrol', cost: 100, location: 'Gas Station' },
    { name: 'Movies', cost: 200, location: 'Cinema' },
  ];

  function ExpenseItem(props) {
    const { name, cost, location } = props.expense;
  
    return (
      <li className="expense-list__item">
        <div className="expense-list__item-name">{name}</div>
        <div className="expense-list__item-cost">{cost} Rs</div>
        <div className="expense-list__item-location">Location: {location}</div>
      </li>
    );
  }

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="expense-list">
          <h2 className="expense-list__title">Expense Items</h2>
          <ul className="expense-list__items">
            {expenses.map((expense, index) => (
              <ExpenseItem key={index} expense={expense} />
            ))}
          </ul>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

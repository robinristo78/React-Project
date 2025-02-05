import './App.css'
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';

const DYMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2024,10,12),
    title: 'New book',
    amount: 30.99
  },
  {
    id: 'id2',
    date: new Date(2024,10,12),
    title: 'New jeans',
    amount: 99.99
  },
  {
    id: 'id3',
    date: new Date(2024,0,25),
    title: 'New Bag',
    amount: 139.99
  }
]

const App = () => {
  
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log('In App.js');
    // console.log(expense);
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    });
  }

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
import ExpenseItem from './Components/Expenses/ExpenseItem';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import {useState} from 'react';
function App() {
  console.log("app is called")

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];
  const [dummyExpense,setDummyExpense] = useState(expenses)
  const newExpenseAdditionHandler = (newData)=>{
    newData = {id:Math.random().toString(),...newData}
    console.log("inside App")
    console.log(newData)
    setDummyExpense((prevExpenses)=>{return [newData,...prevExpenses]})
  }
  return (
    <>
      <NewExpense onAddingNewExpense={newExpenseAdditionHandler}/>
      <Expenses expenses = {dummyExpense}/>
    </>
  );
}

export default App;

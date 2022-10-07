import React, {useState}from 'react'
import "./Expenses.css"
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense= props.expenses.filter((expense)=>{
        console.log(expense,expense.date.getFullYear().toString(),expense.date.getYear(), filteredYear);
        return expense.date.getFullYear().toString() === filteredYear;
  })
  // console.log("filteredExpense: ",filteredExpense)
  // let listContent = <p>No Expenses found for the selected year !</p>
  // if(filteredExpense.length > 0)
  // {
  //   listContent = filteredExpense.map((expense)=>{
  //     return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
  // })
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      <ExpensesChart expenses={filteredExpense}/>
      <ExpenseList filteredExpense ={filteredExpense}/>
    </Card>
  )
}

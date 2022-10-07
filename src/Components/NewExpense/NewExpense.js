import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"
import ToggleExpenseForm from './ToggleExpenseForm'
export default function NewExpense(props) {
  const [hideForm,setHideForm] = useState(true)
  const onAddNewExpense = (newExpense)=>{
    console.log("inside parent NewExpense")
    console.log(newExpense)
    props.onAddingNewExpense(newExpense)
  }
  const toggleExpenseHandler = (toggledValue)=>{
      setHideForm(toggledValue)
  }
  
  return (
    <>
    <div  hidden={!hideForm}>
      <ToggleExpenseForm toggleExpenseForm = {toggleExpenseHandler} hideForm={hideForm}/>
    </div>
   <div className='new-expense' hidden={hideForm}>
    <ExpenseForm onSumbitNewExpense = {onAddNewExpense}/>
   </div>
  
    </>
  )
}

import React,{useState} from 'react'
import "./ExpenseForm.css"
export default function ExpenseForm(props) {
    console.log("inside ExpenseForm")
    const [enteredTitle,setEnteredTitle] = useState("")
    const [enteredAmount,setEnteredAmount] = useState("")
    const [enteredDate,setEnteredDate] = useState("")
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
    }
    const formSubmitHandler = (event)=>{
        event.preventDefault()
        let userData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(userData)
        setEnteredAmount("")
        setEnteredDate("")
        setEnteredTitle("")
        props.onSumbitNewExpense(userData)
    }
    const cancelHandler = ()=>{
        setEnteredAmount("")
        setEnteredDate("")
        setEnteredTitle("")
    }
  return (
    <div className="new-expense">
    <form onSubmit={formSubmitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" name="" id="" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2020-01-01"  max="2023-01-01" onChange={dateChangeHandler} value={enteredDate}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={cancelHandler}>Cancel</button>
    </div>
    </form>
</div>
  )
}

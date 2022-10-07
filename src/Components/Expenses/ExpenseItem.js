import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
export default function ExpenseItem(props) {

    console.log("helloooooo")
    const [title, setTitle] = useState(props.title)
    const clickHandler = ()=>{
        setTitle("updated!!!")
        console.log(title)
    }
    const date = props.date.toLocaleString('en-US',{day:"2-digit"})
    const month = props.date.toLocaleString('en-US',{month : "long"})
    const year =  props.date.toLocaleString('en-US',{year : "numeric"})
    return (
    <li>
    <Card className='expense-item'>
        <ExpenseDate month ={month} year={year} date={date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </Card>
    </li>
  )
}

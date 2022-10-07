import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"
export default function ExpenseList(props) {
  if (props.filteredExpense.length > 0) {
    return props.filteredExpense.map((expense) => {
      return (
        <ul className="expenses-list">
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
        </ul>
      );
    });
  }
  else{
    return (<h2 className="expenses-list__fallback">No Expenses found for the selected year !</h2>)
  }
}

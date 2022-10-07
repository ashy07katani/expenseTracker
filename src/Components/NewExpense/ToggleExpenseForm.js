import React from "react";
import "./ToggleExpenseForm.css";
export default function ToggleExpenseForm(props) {
    const toggleClickHandler = ()=>
    {
        console.log("ToggleExpenseForm ",props.hideForm)
        props.toggleExpenseForm(!props.hideForm)
    }
  return (
    <div className="toggle-expense-form">
      <div>
        <button onClick={toggleClickHandler}>Add Expense</button>
      </div>
    </div>
  );
}

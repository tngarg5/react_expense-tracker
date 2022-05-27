import react, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// using parameter to accept object and use its properties
function ExpenseItems(props) {
  const [title,setTitle] = useState(props.title);    //gets a default state value
  
  const clickHandler = () => {
    setTitle('updated!!');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}> Button </button>
    </Card>
  );
}

export default ExpenseItems;

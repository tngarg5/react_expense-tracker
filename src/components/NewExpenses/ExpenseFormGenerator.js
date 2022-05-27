import react, { useState } from "react";
import "./ExpenseFormGenerator.css";

const ExpenseFromGenerator = () => {
    /*
    //approach 2
    const [userInput,setUserInput] = useState({
        enteredTitle :'',
        enteredAmount : '',
        enteredDate : '',
    //now we can use this object but we have to copy the values everytime
    });
    */
    const [enteredTitle, setEnteredTitle] = useState('');
    const [amountTitle, setAmountTitle] = useState('');
    const [dateTitle, setDateTitle] = useState('');
  const inputHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle('event.target.value')
    // setUserInput({
    //     ...userInputs,
    //     enteredTitle: event.target.value;
    // });
  };
  const amountHandler = (event) => {
    console.log(event.target.value);
    setAmountTitle('event.target.value')
  };
  const dateHandler = (event) => {
    console.log(event.target.value);
    setDateTitle('event.target.value')
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={inputHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2024-12-31" onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseFromGenerator;

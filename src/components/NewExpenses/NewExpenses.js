import react from "react";
import './NewExpenses.css'
import ExpenseFromGenerator from "./ExpenseFormGenerator";
function NewExpenses(){

    return(
        <div className="new-expense">
            <ExpenseFromGenerator />
        </div>
    );
}

export default NewExpenses;
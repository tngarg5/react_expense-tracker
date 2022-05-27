import "./ExpenseDate.css"

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-IN',{month:'long'}); //January, august,etc
    const day = props.date.toLocaleString('en-IN',{day:'2-digit'}); //11,08.etc
    const year = props.date.getFullYear();  //2015,2020

    return(
        <div className="expense-date ">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
           
        </div>
    );

}
export default ExpenseDate;
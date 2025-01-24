import './NewExpense.css'
import ExpenseForm from "./ExpenseForm.jsx";

const NewExpense = (props) => {
    return(
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    )
}

export default NewExpense;
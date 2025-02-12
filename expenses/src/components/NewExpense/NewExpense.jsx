import './NewExpense.css'
import ExpenseForm from "./ExpenseForm.jsx";
import { useState } from "react";

const NewExpense = (props) => {
    const [editForm, setEditForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setEditForm(false);
    }

    const startFormHandler = () => {
        setEditForm(true);
        console.log('form edit open');
    }

    const stopFormHandler = () => {
        setEditForm(false);
        console.log('form edit close');
    }

    return(
        <div className="new-expense">
            {!editForm && (
                <button onClick={startFormHandler}>Add New Expense</button>
            )}
            {editForm && (
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopFormHandler}
                />
            )}
        </div>
    )
}

export default NewExpense;
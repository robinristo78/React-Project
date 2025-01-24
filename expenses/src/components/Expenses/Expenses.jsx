import './Expenses.css'
import ExpenseItem from './ExpenseItem.jsx';
import Card from '../UI/Card.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';

const Expenses = (props) => {

    return (
        <Card className='expenses'>
            <ExpensesFilter/> 
            {/* siin peab ExpenseFilter-ist tulema andmed Expenses.jsx,
            siis peab console.log(`Year data in Expenses.jsx ${aasta}`) olema */}
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses;
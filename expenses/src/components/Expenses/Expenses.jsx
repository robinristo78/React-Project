import { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem.jsx';
import Card from '../UI/Card.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import ExpensesList from './ExpensesList.jsx';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(`Your data in Expenses.js ${selectedYear}`);
    }

    const filteredExpenses = props.expenses.filter(expense => { 
        return new Date(expense.date).getFullYear() == filteredYear;
    });

    console.log('Filtered expenses:', filteredExpenses);

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} /> 
            <ExpensesList expenses={filteredExpenses}/>
            
            {/* {filteredExpenses.length > 0 ? (
                filteredExpenses.map((expense) => (
                    <ExpenseItem expenseData={expense} key={expense.id} />
                ))
            ) : (
                <p style={{ color: 'white' }}>No items found for {filteredYear}.</p>
            )} */}

            
            {/* <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/> */}
        </Card>
    )
}

export default Expenses;
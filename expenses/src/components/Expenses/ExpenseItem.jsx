import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.jsx'
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseData.title);

    // const clickHandler = () => {
    //     console.log('Clicked!');
    //     setTitle(`Updated by click ${title}`)
    //     console.log(title);
    // }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.expenseData.date}/>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>{props.expenseData.amount}</div>
                </div>
                {/* <button onClick={clickHandler}></button> */}
            </Card>
        </li>
    )
}

export default ExpenseItem;
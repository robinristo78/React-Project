import './ExpenseItem.css'

const ExpenseItem = () => {
    // return (<h2>ExpenseItem</h2>)
    return (
        <div className='expense-item'>
            <div>Date</div>
            <div className='expense-item__description'>
                <h2>Title</h2>
                <div className='expense-item__price'>Prices</div>
            </div>
        </div>
    )
}

export default ExpenseItem
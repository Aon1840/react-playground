import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {  
    const [title, setTitle] = useState(props.expenseTitle)
    console.log("ExpensesItem evaluated by React")
    const clickHandler = () => {
        setTitle("Updated!")
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate
                expenseDate = {props.expenseDate}
            />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )
}

export default ExpenseItem;
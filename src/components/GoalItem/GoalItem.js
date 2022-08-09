import React from 'react'

import './GoalItem.css'

function GoalItem(props) {

    const deleteItemHandler = () => {
        props.onDelete(props.id)
    }

    return (
        <li className={'goal-item'} onClick={deleteItemHandler}>
            {props.children}
        </li>
    )
}

export default GoalItem
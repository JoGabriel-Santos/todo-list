import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import './Input.css'

function Input(props){

    const [enteredValue, setEnteredValue] = useState('')

    const goalInputChangeHandler = event => {
        setEnteredValue(event.target.value)
    }

    const formSubmitHandler = event => {
        event.preventDefault()

        props.onAddGoal(enteredValue)
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <div className={'form-control'}>
                <label>TODO List</label>

                <input type="text" onChange={goalInputChangeHandler}/>
            </div>

            <Button type={'submit'} onClick={formSubmitHandler}>Add Goal</Button>
        </form>
    )
}

export default Input

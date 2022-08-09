import React, {useState} from 'react'

import Input from './components/Input/Input'
import GoalList from './components/GoalList/GoalList'

import './App.css'

function App() {

    const [goalsList, setGoalsList] = useState([
        {text: 'Welcome to TODO List by @JoGabriel-Santos', id: '1'}
    ])

    const addGoalHandler = enteredText => {
        setGoalsList(prevGoals => {
            const updatedGoals = [...prevGoals]

            updatedGoals.unshift({text: enteredText, id: Math.random().toString()})

            return updatedGoals
        })
    }

    const deleteItemHandler = goalId => {
        setGoalsList(prevGoals => {
            return prevGoals.filter(goal => goal.id !== goalId)
        })
    }

    let content = (
        <p style={{textAlign: 'center'}}>No goals found. Maybe add one?</p>
    )

    if (goalsList.length > 0) {
        content = (
            <GoalList
                items={goalsList}
                onDeleteItem={deleteItemHandler}
            />
        )
    }

    return (
        <div>
            <section id={'goal-form'}>
                <Input onAddGoal={addGoalHandler}/>
            </section>

            <section id={'goals'}>
                {content}
            </section>
        </div>
    )
}

export default App

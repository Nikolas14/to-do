import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import style from './AddTodo.module.css'

import { v4 as uuidv4 } from "uuid";

uuidv4()

function AddTodo({ todos,setTodos }) {

    const addTodo = todo => {
        const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false, color:"#000000" }];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const [value, setValue] = useState('')
    const [color, setColor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value,color)
        setValue('')
    };

    return (
        <form className={style.todoForm} onSubmit={handleSubmit}>

            <input
                className= {style.todoInput}
                placeholder="Oq não posso esquecer!?"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            >
            </input>
            <FontAwesomeIcon 
                className={style.addIcon} 
                icon={faPlusCircle} 
                size={'2xl'} 
                onClick={handleSubmit}
                onChange={(e) => setColor(e.target.value)}
                value={color}
            />

        </form>
    )
}

export default AddTodo
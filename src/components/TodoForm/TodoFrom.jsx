import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle } from '@fortawesome/free-solid-svg-icons'


function TodoForm({ addTodo }) {

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value)
        setValue('')
    };

    return (
        <form className='todoForm' onSubmit={handleSubmit}>

            <input
                className='todo-input'
                placeholder="Qual a missão de hoje!?"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            >
            </input>
            <FontAwesomeIcon className="add-icon" icon={faPlusCircle} size={'2xl'} onClick={handleSubmit}/>
        </form>
    )
}

export default TodoForm
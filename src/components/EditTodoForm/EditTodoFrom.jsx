import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faCheckCircle} from '@fortawesome/free-solid-svg-icons'

function EditTodoForm ({editTodo, task}) {

    const [value,setValue] = useState(task.task)

    const handleSubmit = (e) => {

          e.preventDefault();

          editTodo(value, task.id);
        };

    return (
        <form className="todoForm" onSubmit={handleSubmit}>

                <input 
                className="todo-input" 
                placeholder="Qual a nova missão!?" 
                onChange={(e) => setValue(e.target.value)}
                value={value}
                >
                </input>
                <FontAwesomeIcon className="add-icon" 
                icon={faCheckCircle} 
                size={'2xl'} 
                onClick={handleSubmit}
                />
            </form>
    )
}

export default EditTodoForm
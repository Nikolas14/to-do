import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Todo({ task , toggleComplete, deleteTodo, editTodo}) {
    return (
        <div className="todo">
            <p className={`${task.completed ? "completo" : "incompleto"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div className='icons'>
                <FontAwesomeIcon className="edit-icon" icon={faPen} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}

export default Todo 
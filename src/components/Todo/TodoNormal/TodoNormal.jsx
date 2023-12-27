import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import style from'./TodoNormal.module.css'


function TodoNormal({task,editTodo,deleteTodo,toggleComplete}){
    return(
        <div className={style.todoNormalContainer}>
        <div className={style.textoContainer}>
            <p className={`${task.completed ? style.completo : style.incompleto}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        </div>

        <div  className={style.iconeContainer}>
            <FontAwesomeIcon className={style.editIcon}
            icon={faPen} size={'xl'} 
            onClick={() => editTodo(task.id)}
            />
            <FontAwesomeIcon className={style.deleteIcon}
            icon={faTrash} size={'xl'} 
            onClick={() => deleteTodo(task.id)}
            />
        </div>
        </div>
    )
}

export default TodoNormal
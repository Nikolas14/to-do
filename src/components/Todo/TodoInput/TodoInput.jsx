import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import style from './TodoInput.module.css'
import { useState } from 'react';


function TodoInput({task, editTask}) {

    const [value,setValue] = useState(task.task)
    

    return (
        <>
            <form className={style.inputContainer} onSubmit={()=>editTask(value, task.id)}>
                <input className={style.input} 
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                />
                <div className={style.iconeContainer}>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        size={'2xl'}
                        onClick={()=>editTask(value, task.id)}
                    />
                </div>
            </form>

        </>
    )
}

export default TodoInput
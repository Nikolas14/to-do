import style from'./Todo.module.css'

import TodoInput from "./TodoInput/TodoInput";
import TodoNormal from './TodoNormal/TodoNormal';


function Todo({task, editTodo, deleteTodo,toggleComplete, editTask}) {

    console.log(task.color)
    return (
        //task.color pro bgc
        
        <div className={style.todoContainer}>
                {
                    
                    task.isEditing ? (
                        <TodoInput 
                            task={task} 
                            editTask={editTask}
                        />
                        ):(
                        <TodoNormal task={task}
                            editTodo={editTodo}
                            deleteTodo={deleteTodo}
                            toggleComplete={toggleComplete}
                        />
                        )
                }
        </div>
    )
}

export default Todo 
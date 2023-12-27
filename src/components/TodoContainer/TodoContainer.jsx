import { useEffect, useState } from "react"
import style from './TodoContainer.module.css'
import Titulo from "../Titulo/Titulo";
import Todos from "../Todos/Todos";
import AddTodo from "../AddTodo/AddTodo";



function TodoContainer() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    return (
        <div className={style.todoWrapper}>
            <Titulo/>
            <AddTodo todos={todos} setTodos={setTodos} />
            <Todos todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default TodoContainer
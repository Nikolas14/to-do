import Todo from "../Todo/Todo"

import style from './Todos.module.css'

function Todos({todos,setTodos}) {

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const toggleComplete = id => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTask = (task, id) => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    return (
        <div className={style.todosContainer}>
            {
                todos.map((todo)=>(
                <Todo key={todo.id} 
                    task={todo} 
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    editTask={editTask}
                    />
                ))
            }
        </div>
    )
}

export default Todos
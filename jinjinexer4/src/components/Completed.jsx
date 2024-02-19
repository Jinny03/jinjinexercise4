import React from 'react';
import { useTodoList } from "../context/TodoContext";

function Completed() {
    const { todos, setTodos } = useTodoList();

    const onDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const todoList = () => {
        return todos.filter((todo) => todo?.complete);
    }

    return (
        <div>
            <ul>
                {todoList().map((todo, i) => (
                    <li key={i}>
                        {todo.text}
                        <button onClick={() => onDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Completed;
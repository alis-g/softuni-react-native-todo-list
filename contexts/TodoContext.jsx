import { uuid } from "expo";
import { createContext, useState } from "react";

export const TodoContext = createContext({
    showCreateTodo: true,
    handleDismiss: () => { },
    openCreateTodoHandler: () => { }
});

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([])
    const [showCreateTodo, setShowCreateTodo] = useState(true)

    const handleDismiss = () => {
        setShowCreateTodo(false)
    }

    const openCreateTodoHandler = () => {
        setShowCreateTodo(true)
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => 
            prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed} : false)
        )
    }

    const addTodo = (text) => {
        const newTodo = {
            id: uuid.v4(),
            text,
            completed: false
        }
        setTodos(prevTodos => [...prevTodos, newTodo])
    }

    const value = {
        showCreateTodo,
        handleDismiss,
        openCreateTodoHandler,
        todos,
        addTodo,
        toggleTodo
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
}
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

    const addTodo = (text) => {
        const newTodo = {
            id: uuid.v4,
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
        addTodo
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
}
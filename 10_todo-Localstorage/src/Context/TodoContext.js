import { createContext, useContext } from "react";

export const TodoContext = createContext({
    items :[
        {
            id : 1,
            todoName : "",
            checkStatus : false,
        }
    ],

    addTodo: (todoName) => {},
    updateTodo: (id, todoName) => {},
    deleteTodo: (id) => {},
    checkMark: (id) => {}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
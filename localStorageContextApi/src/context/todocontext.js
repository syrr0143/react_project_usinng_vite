import { createContext } from "react";

export const toDoContext = createContext({
    todos: [
        {
            id: 1,
            title: "hello",
            completed: false
        }
    ],
    addToDo: (todo) => { },
    updateToDo: (id, todo) => { },
    deleteToDo: (id) => { },
    toggleCompleted: (id) => { }
})

export const useToDo = () => {
    return useContext(toDoContext);
}
export const toDoProvider = toDoContext.Provider;
import React, {createContext, useState} from 'react'
export const TodoContext = createContext();

const TodoContextProvider = ({ children}) => {
    //State

    const style = {
        backgound: "white",
        color: "red",
      };
    
      const [toDos, settoDos] = useState([
        { id: 1, title: "Viec 1" },
        { id: 2, title: "Viec 2" },
        { id: 3, title: "Viec 3" },
      ]);
    
      const addTodoList = (todo) => {
        return settoDos([...toDos, todo]);
      };
    
      const deleteTodo = (id) => {
        settoDos(toDos.filter((todo) => todo.id !== id));
      };

      const todoContextData = {
          toDos:toDos,
          addTodoList:addTodoList,
          deleteTodo:deleteTodo,

      }


    

    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider

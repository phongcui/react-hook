import React, {createContext, useContext, useState} from 'react'
import { v4 as uuidv4 } from "uuid";
const TodoContext = createContext();

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

      //TodoForm
      const [title, settitle] = useState("");

      const onTitleChange = (event) => {
        settitle(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        addTodo({
          id: uuidv4(),
          title: title,
        });
        settitle("");
      };

      // End TodoForm

      const todoContextData = {
          toDos:toDos,
          addTodoList:addTodoList,
          deleteTodo:deleteTodo,
          title:title,
          onTitleChange:onTitleChange,
          handleSubmit:handleSubmit,
          addTodo:addTodoList,
      }


    

    return (
        <TodoContext.Provider value={todoContextData}>
            { children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider

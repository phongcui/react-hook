import React, { useState, useContext } from "react";
import "../App.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";

const Todo = () => {
  // const style = {
  //   backgound: "white",
  //   color: "red",
  // };

  // const [toDos, settoDos] = useState([
  //   { id: 1, title: "Viec 1" },
  //   { id: 2, title: "Viec 2" },
  //   { id: 3, title: "Viec 3" },
  // ]);

  // const addTodoList = (todo) => {
  //   return settoDos([...toDos, todo]);
  // };

  // const deleteTodo = (id) => {
  //   settoDos(toDos.filter((todo) => todo.id !== id));
  // };

  const { toDos, addTodoList, deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo-list">
      <TodoForm addTodo={addTodoList}></TodoForm>
      <ul>
        {toDos.map((Todo) => {
          return <TodoItem todo={Todo} deleteTodo={deleteTodo}></TodoItem>;
        })}
      </ul>
    </div>
  );
};

export default Todo;

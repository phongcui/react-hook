import React from "react";
import Todo from "./Todo";

const TodoItem = ({ todo, deleteTodo }) => {
  const style = {
    backgound: "white",
    color: "red",
  };

  // const todo = props.todo;
  return (
    <li
      onClick={() => {
        deleteTodo(todo.id);
      }}
      style={style}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;

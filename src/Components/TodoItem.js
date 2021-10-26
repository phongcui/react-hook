import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Todo from "./Todo";

const TodoItem = ({ todo, deleteTodo }) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  // const todo = props.todo;
  return (
    <li
      style={style}
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

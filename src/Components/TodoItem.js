import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  // load todoContext
  const { deleteTodo } = useContext(TodoContext);

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

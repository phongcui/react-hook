import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = ({ addTodo }) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;

  const style = isLightTheme ? light : dark;

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter new Todojob"
        onChange={onTitleChange}
        value={title}
        style={style}
      ></input>
      <input type="submit" value="add" style={style}></input>
    </form>
  );
};

export default TodoForm;

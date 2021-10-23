import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({addTodo}) => {
    const [title, settitle] = useState('');

    const onTitleChange = (event) => {
        settitle(event.target.value);
    }
    const handleSubmit =  (event) => {
        event.preventDefault();
        addTodo({
            id:uuidv4(),
            title:title
        })
        settitle('');
    }

    const style = {
        backgound: "white",
        color: "red",
      };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Enter new Todojob"onChange={onTitleChange} value={title} ></input>
      <input type="submit" value="add" style={style}></input>
    </form>
  );
};

export default TodoForm;

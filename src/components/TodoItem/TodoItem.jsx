import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <input id={props.id} />
      <label htmlFor={props.id}>{props.title}</label>
    </div>
  );
};

export default TodoItem;

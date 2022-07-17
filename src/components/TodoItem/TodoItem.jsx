import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <input type="checkbox" id={props.id} />

      <label htmlFor={props.id}>{props.title}

        <input type="text" style={{
          // border: '0',
          borderBottom: '1 solid'
        }} />
      </label>
    </div>
  );
};

export default TodoItem;

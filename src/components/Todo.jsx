import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckedIcon } from "../assets/checked.svg";
import { ReactComponent as UnCheckedIcon } from "../assets/unchecked.svg";
import styles from "./Todo.module.css";

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const InputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  position: absolute;
  width: 18px;
  height: 18px;
  margin: 0px;
  opacity: 0;
`;

const StyledLabel = styled.label`
  color: #413f3f;
`;

const Todo = (props) => {
  const { title, finished, id, setTodos } = props;

  const handleCheck = (event) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          finished: event.target.checked,
        };
      })
    );
  };

  return (
    <TodoWrapper>
      <InputContainer>
        <StyledInput type="checkbox" checked={finished} onClick={handleCheck} />
        {finished ? (
          <CheckedIcon className={styles.icon} />
        ) : (
          <UnCheckedIcon className={styles.icon} />
        )}
      </InputContainer>
      <StyledLabel>{title ?? ""}</StyledLabel>
    </TodoWrapper>
  );
};

export default Todo;

import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = () => {
  return (
    <Wrapper>
      <TodoList />
    </Wrapper>
  );
};

export default Layout;

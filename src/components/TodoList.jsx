import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 399px;
  height: 597px;
  background: #f4f4f4;
  box-shadow: 15.9651px 11.7144px 53.3733px rgba(0, 0, 0, 0.2);

  position: relative;
`;

const TopDecoration = styled.div`
  background: #413f3f;
  position: absolute;
  width: 399.13px;
  height: 13.47px;
  left: 0px;
  top: -1px;
`;

const TodoList = () => {
  return (
    <Wrapper>
      <TopDecoration />
    </Wrapper>
  );
};

export default TodoList;

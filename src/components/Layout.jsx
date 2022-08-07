import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import BackgroundImg from "../images/phone_img2.webp";
import Todo from "./Todo";

const LayoutBox = styled.div`
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  //핸드폰 이미지
  //background-image: url(${BackgroundImg});
  //background: cover;
  //background-repeat: no-repeat;
  //background-position: center; //이미지 가운데로
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px pink solid;
  flex-direction: column;
`;
const PhoneSize = styled.div`
  background-color: #fdefb8;
  width: 500px;
  height: 800px;
  border-radius: 15px;
  display: flex;
  //align-items: center;
  border: 1px pink solid;
  flex-direction: column;
`;
const DateInput = styled.div`
  display: flex;
  margin: -30px auto 10px auto;
  padding: 2rem;
  border-bottom: 1px solid gray;
`;

const fakeTodoData = [
  {
    title: "fake title",
    finished: false,
    id: 1,
  },
  {
    title: "fake title2",
    finished: true,
    id: 2,
  },
];

const Layout = () => {
  const [todos, setTodos] = useState(fakeTodoData);

  return (
    <LayoutBox>
      <Container>
        <PhoneSize>
          <DateInput>
            <Header />
            <Input />
          </DateInput>
          {/* <Todo title="fake title" finished={false} id="1" />
          <Todo title="fake title 2" finished={true} id="2" /> */}

          {todos.map(({ title, finished, id }) => (
            <Todo
              title={title}
              finished={finished}
              id={id}
              setTodos={setTodos}
            />
          ))}
        </PhoneSize>
      </Container>
    </LayoutBox>
  );
};

export default Layout;

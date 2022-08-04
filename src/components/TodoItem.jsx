import React, { useState } from "react";
import styled from "styled-components";

const StBox = styled.div`
  justify-content: center;
  display: flex;
  margin: 20px;
`;
// const Inputs = styled.input`
//   border-top: 'none';
//   border-right: 'none';
//    border-left: 'none'; 
//   border-bottom: '1 solid';
// `
// const CheckedBox = styled.input`
//   justify-content: center;
//   display: flex;
//   margin: 20px;
// `;
// const StyledInput = styled.input`
  
// `

const TodoItem = (props) => {
  const [text, setText] = useState('')
  const [inputState, setInputState] = useState( {backgroundColor: 'white',borderTop:'none', borderRight:'none', borderLeft:'none',  borderBottom: '1 solid'})


  const checkboxClick = (e) => {
  //  빈값 체크안되게?
  // style 하나의 클래스 네임같은 것으로 사용하고 싶음
  // 왜 같이 눌러지는건지? id값이 같아서?
  console.log(e)
    e.target.checked == true ? setInputState({ backgroundColor: 'grey',textDecoration: 'line-through', borderTop:'none', borderRight:'none', borderLeft:'none',  borderBottom: '1 solid' }) : setInputState({ backgroundColor: 'white',borderTop:'none', borderRight:'none', borderLeft:'none',  borderBottom: '1 solid' })
  }


  return (
    <div>
      <div>
      <StBox>
          <input type="checkbox" onClick={checkboxClick} id={props.id} />
          <label htmlFor={props.id}> 
            <input type="text" defaultValue = {text}
              style={inputState} />
          </label>
        </StBox>
      </div>
      <div>
      <StBox>
      <input type="checkbox" onClick={checkboxClick} id={props.id} />
          <label htmlFor={props.id}> 
            <input type="text" 
              style={inputState} />
          </label>
        </StBox>
        
         </div>
    </div>
  );
};

export default TodoItem;

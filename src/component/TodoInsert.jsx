import React, { useState } from 'react';
import styled from 'styled-components';
import {MdAdd as AddIcon} from 'react-icons/md'
// Tip: asㄹ르 사용하여 별칭을 붙여 사용하면 추후 아이콘 바꿀때 한곳만 바꾸면 되서 편함


const TodoInsertWrapper = styled.form`
  display: flex;
  background: #b8cf;

`;

const StyledInput = styled.input`
/* 기본 스타일 초기화 */
background: none;
outline: none;
border: none;
padding: 0.5rem;
font-size: 1.125rem;
line-height: 1.5;
color: white;
flex: 1;

&::placeholder {
  color: #dee3e6;
}
`;

const StyledButton = styled.button`
  border: none;
  background: #fff44f;

  color: #000;
  padding: 0 1rem;
  font-size: 3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;
  flex: 1;
  &:hover {
    background: #adb5bd;
  }
`;

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리 (제어컴포넌트)
function TodoInsert({onInsert}) {

  const [value, setValue] = useState('');

const handleChange = (e) => {
  setValue(e.target.value)
};

const handleSubmit = (e) => {
  onInsert(value);
  setValue('') // value값 초기화

  // submit 이벤트가 발생시키는 새로고침을 방지
  e.preventDefault();
};





  return (
    // form 태그 사용시 input에서 엔터키를 눌렀을 때도 submit 이벤트 발생
    // 일반적으로 keyup 이벤트를 통해 엔터키를 감지하는 로직을 작성
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput type='text' placeholder='포스트잇' onChange={handleChange} value={value}/>
      <StyledButton type='submit'>
        포스트잇
      </StyledButton>
    </TodoInsertWrapper>
  );
}


export default TodoInsert;
import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
const TodoListItemWrapper = styled.div`
  /* padding: 1rem; */
  display: flex;
  align-items: center;
`;

const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg{
    /* 아이콘 스타일링 */
    font-size: 1.5rem;
    color: ${props => props.checked && '#22b8cf'};
    background: #F0E68C;
    color: #000;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`;

const Text = styled.div`
  /* margin-left: 0.5rem; */
  flex: 1; // 차지할 수 있는 모든 영역 차지
  background: #F0E68C;
    color: #000;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  ${props => props.checked &&
  css`
    color: #adb5bd;
    text-decoration: line-through;
  `
  
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  a:hover {
    color: #ff8787;
  }
  background: #F0E68C;
    color: #000;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const InputText = styled.input`
/* 기본 스타일 초기화 */
background: none;
outline: none;
border: none;
/* padding: 0.5rem; */
font-size: 1.5rem;
line-height: 1.5; 
color: #000;
flex: 1;
word-wrap: break-all; 


&::placeholder {
  color: #dee3e6;
}
`;
// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여줌

function TodoListItem(props) {
  // props로 받았을 경우 한번에 구조 분해 할당 하는법
  const {todo: { id, text, checked },onRemove , onToggle } = props;
  const [value, setInsert] = useState('');
  const handleChange = (e) => {
    setInsert(e.target.value)
  };
  // todo로 먼저 한번 분해해서 받았을 경우
  // const {id, text, checked} = todo;
  console.log(id, text);
  return (
    <TodoListItemWrapper>
      <Checkbox checked={checked}
        onClick={() => { onToggle(id); }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      <Text checked={checked}>
        {/* <InputText text={text} onChange={handleChange} value={value}/> */}
        {text}
      </Text>
      
      <Remove 
      onClick={() => { onRemove(id);} }
      >
      <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
}

export default React.memo(TodoListItem);
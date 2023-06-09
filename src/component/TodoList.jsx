import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;


// todos 배열을 props로 받아와서 map()함수를 사용해 여러개의 TodoListItem 컴포넌트로 변환해 보여줌
function TodoList(props) {
  const { todos, onRemove, onToggle } =props;
  console.log(todos);
  return (
   
    <TodoListWrapper>
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}
      {/* Quiz: TodoListItem으로 이루어진 배열로 변환하여 반복 렌더링 */}
      {todos.map(todo => {
        return (
        <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
        )
      })}
    </TodoListWrapper>
  );
}

export default TodoList;
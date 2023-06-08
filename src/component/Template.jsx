import React from 'react';
import { styled } from 'styled-components';
화면흐
const TemplateWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  .app-title {
    background: #3cb371;
    color: white;
    height: 6rem;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    background: white
  }
`;





function Template(props) {

  const {children} = props;

  return (
    <TemplateWrapper>
      <div className='app-title'>일정 관리</div>
      <div className='content'>{children}</div>
    </TemplateWrapper>
  );
}

export default Template;
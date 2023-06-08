import React from 'react';
import { styled } from 'styled-components';

const TemplateWrapper = styled.div`
  width: 200px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  .app-title {
    background: #3cb371;
    color: white;
    height: 200px;
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
      <div className='app-title'>메모</div>
      <div className='content'>{children}</div>
    </TemplateWrapper>
  );
}

export default Template;
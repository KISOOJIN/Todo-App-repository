import React from 'react';
import styled from 'styled-components';

const TodoButton = styled.button`
  margin-top: 10px;
  margin-left: 20px;
  width: 40px;
  height: 40px;
`;

const Todoitem = styled.div`
  margin: 7px;
  font-size: 30px;
  border: solid 1px gray;
  background-color: white;
  height: 60px;
  line-height: 60px;
`;

const TodoItem = ({ item, Delete }) => {
  const { id, text } = item;

  return (
    <Todoitem>
      <em>{text}</em>
      <TodoButton onClick={() => Delete(id)}>🗑</TodoButton>
    </Todoitem>
  );
};

export default TodoItem;

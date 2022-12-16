import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const Todolist = styled.div`
  border: 1px solid gray;
  background-color: lightgray;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
`;

const TodoList = ({ todo, Delete }) => {
  return (
    <Todolist>
      {todo.map((item) => (
        <TodoItem key={item.id} item={item} Delete={Delete} />
      ))}
    </Todolist>
  );
};

export default TodoList;

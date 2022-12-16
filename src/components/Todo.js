import React, { useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const no = useRef(1);
  const [todo, setTodo] = useState([]);

  const Delete = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const Add = (text) => {
    setTodo([...todo, { id: no.current++, text, check: false }]);
  };

  return (
    <div className="Todos">
      <h1>To do list</h1>
      <TodoForm Add={Add} />
      <TodoList todo={todo} Delete={Delete} />
    </div>
  );
};

export default Todo;

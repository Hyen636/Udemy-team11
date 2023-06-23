import React, { useState } from "react";

const List = ({ content, id, onDelete }) => {
  return (
    <li id={id}>
      <span>{content}</span>
      <button onClick={() => onDelete(id)}>❌</button>
    </li>
  );
};

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const onSubmit = (evnet) => {
    evnet.preventDefault();
    setTodos((pre) => [...pre, { content: todo, id: Date.now() }]);
    setTodo("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTodo(value);
  };
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <p>Todo List</p>
      <ul>
        {todos.map((todo) => (
          <List
            key={todo.id}
            content={todo.content}
            id={todo.id}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write a to do"
          value={todo}
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default Todo;

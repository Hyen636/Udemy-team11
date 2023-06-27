import React, { useState } from "react";
import List from "./list";

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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
          value={todo}
          onChange={onChange}
          style={{
            width: 400,
            fontSize: 32,
            color: "#fff",
            padding: "10px",
            border: "none",
            borderBottom: "2px solid #fff",
            backgroundColor: "inherit",
            outline: "none",
          }}
        />
      </form>
    </div>
  );
};

export default Todo;

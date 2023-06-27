import React from "react";

const List = ({ content, id, onDelete }) => {
  return (
    <li
      id={id}
      style={{
        width: 350,
        display: "flex",
        justifyContent: "space-between",
        fontSize: 24,
      }}
    >
      <span>{content}</span>
      <button
        onClick={() => onDelete(id)}
        style={{ border: "none", backgroundColor: "inherit" }}
      >
        ❌
      </button>
    </li>
  );
};

export default List;

import React from "react";
import Clock from "components/clock";
import Greeting from "./greeting";
import Todo from "./todo";

const Main = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      <Clock />
      <Greeting />
      <Todo />
    </div>
  );
};

export default Main;

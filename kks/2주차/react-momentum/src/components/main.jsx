import React from "react";
import Clock from "components/clock";
import Greeting from "./greeting";

const Main = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      <Clock />
      <Greeting />
    </div>
  );
};

export default Main;

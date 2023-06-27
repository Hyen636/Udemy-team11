import React from "react";
import Weather from "./weather";

const Heeder = () => {
  return (
    <header
      style={{
        width: "100%",
        position: "fixed",
        display: "flex",
        justifyContent: "flex-end",
        top: 0,
      }}
    >
      <Weather />
    </header>
  );
};

export default Heeder;

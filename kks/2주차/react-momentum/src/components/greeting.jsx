import React from "react";
import { useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("Hello, what's your name?");
  const [inputShow, setInpuytShow] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setInputValue(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const time = new Date().getHours();
    if (time >= 6 && time < 12) {
      setGreeting(`Good morning, ${inputValue}.`);
    } else if (time >= 12 && time < 18) {
      setGreeting(`Good afternoom, ${inputValue}.`);
    } else if (time >= 18 && time < 22) {
      setGreeting(`Good evening, ${inputValue}.`);
    } else {
      setGreeting(`Good night, ${inputValue}.`);
    }
    setInpuytShow((pre) => !pre);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ fontSize: 42, fontWeight: 500 }}>{greeting}</h2>
      <form
        onSubmit={onSubmit}
        style={{ marginTop: 15, visibility: inputShow ? "visible" : "hidden" }}
      >
        <input
          type="text"
          value={inputValue}
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

export default Greeting;

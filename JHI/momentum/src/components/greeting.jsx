import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [login, setLogin] = useState("");
  const [greeting, setGreeting] = useState("none");

  const onLoginSubmit = (event) => {
    event.preventDefault();
    setGreeting("block");
    setLogin("none");
  };

  const userName = (event) => {
    setUsername(event.target.value);
  };

  return (
    <section className="login">
      <form className={"login-form"} onSubmit={onLoginSubmit}>
        <input
          type="text"
          required
          maxLength="15"
          placeholder="What is your name?"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='What is your name?'"
          onChange={userName}
          style={{ display: login }}
        />
        <input type="submit" value="" />
      </form>
      <h1 className="greeting" style={{ display: greeting }}>
        Hello {username}
      </h1>
    </section>
  );
}

function Greeting() {
  return <Login />;
}

export default Greeting;

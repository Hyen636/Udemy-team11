import React, { useState } from "react";

function Login() {
  const [userId, setuserId] = useState("");
  const [password, setPassword] = useState("");
  const onUserIdChange = (event) => {
    const {
      target: { value },
    } = event;
    setuserId(value);
  };
  const onPasswordChange = (event) => {
    const {
      target: { value },
    } = event;
    setPassword(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (userId !== "admin") {
      alert("Wrong Id!");
    } else if (password !== "password") {
      alert("Wrong Password!");
    } else {
      alert("Login!");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="id"
        value={userId}
        onChange={onUserIdChange}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={onPasswordChange}
      />
      <input type="submit" value={"Login"} />
    </form>
  );
}

export default Login;

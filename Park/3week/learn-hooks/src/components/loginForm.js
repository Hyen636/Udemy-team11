import React from "react";
import useForm from "../hooks/useForm";

export default function LoginForm() {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login data", values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>사용자명: </label>
        <input
          type="text"
          name="username"
          className="username"
          value={values.name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>비밀번호: </label>
        <input
          type="password"
          name="password"
          className="password"
          value={values.password}
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}

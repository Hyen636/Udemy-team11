import React, { useState } from "react";
import styles from "styles/Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${keyword}`);
  };
  return (
    <nav className={styles.navigation}>
      <Link to="/">
        <h1>Movie</h1>
      </Link>

      <form type="submit" onSubmit={onSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={onChange}
          placeholder="Search"
        />
      </form>
    </nav>
  );
};

export default Navigation;

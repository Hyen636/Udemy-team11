import useSearchMovies from "libs/useSearchMovies";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateSearchStore } from "redux/searchSlice";
import Styles from "styles/Header.module.css";

const Header = ({ search = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("keyword");
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setKeyword(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?keyword=${keyword}`);
    setKeyword("");
  };
  const { movies, error } = useSearchMovies(query);

  useEffect(() => {
    dispatch(updateSearchStore({ isLoading: true }));
  }, [query]);

  useEffect(() => {
    if (!movies) return;
    dispatch(
      updateSearchStore({ movies: movies.data.movies, isLoading: false })
    );
  }, [movies]);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  return (
    <header className={Styles.header}>
      <div className={Styles.logoContainer}>
        <h1 className={Styles.logo}>Movie App</h1>
        <nav className={Styles.navigation}>
          <ul>
            <li style={{ opacity: location.pathname === "/" && "1" }}>
              <Link to={"/"}>Home</Link>
            </li>
            <li style={{ opacity: location.pathname === "/search" && "1" }}>
              <Link to={"/search"}>Search</Link>
            </li>
            <li style={{ opacity: location.pathname === "/stream" && "1" }}>
              <Link to={"/stream"}>Stream</Link>
            </li>
          </ul>
        </nav>
      </div>
      {search && (
        <form onSubmit={onSubmit} className={Styles.searchForm}>
          <input
            type="text"
            value={keyword}
            onChange={onChange}
            placeholder="Search..."
          />
        </form>
      )}
    </header>
  );
};

export default Header;

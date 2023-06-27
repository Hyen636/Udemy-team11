import Movie from "components/Movie";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "styles/Home.module.css";

const Search = () => {
  const location = useLocation();
  console.log(location);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  useEffect(() => console.log(query), [query]);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getSearchList = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${query}`
    );
    const json = await response.json();
    console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getSearchList();
  }, [query]);

  return (
    <div className={style.main}>
      {loading || !movies ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            cover_image={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
          />
        ))
      )}
    </div>
  );
};

export default Search;

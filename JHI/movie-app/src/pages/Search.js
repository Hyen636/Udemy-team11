import Movie from "components/Movie";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "styles/Home.module.css";
import useSearchMovies from "hooks/useSearchMovies";

const Search = () => {
  const location = useLocation();
  //console.log(location);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  useEffect(() => console.log(query), [query]);
  const { loading, movies } = useSearchMovies(query);

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

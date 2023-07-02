import React, { useState, useEffect } from "react";

const useSearchMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getSearchList = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${query}`
    );
    const json = await response.json();
    //console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getSearchList();
  }, [query]);
  return { loading, movies };
};

export default useSearchMovies;

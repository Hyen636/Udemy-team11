import React, { useState, useEffect } from "react";

const useFetchMovies = (url) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();
  const [count, setCount] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setMovies(json.data.movies);
      setCount(json.data.movie_count);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [url]);

  return { loading, movies, count, error };
};
export default useFetchMovies;

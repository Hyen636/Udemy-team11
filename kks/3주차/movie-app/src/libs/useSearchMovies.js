import React, { useEffect, useState } from "react";

const useFetchMovies = (query) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?query_term=${query}`
      );
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (!query) return;
    getMovies();
  }, [query]);

  useEffect(() => {
    if (movies) setLoading(false);
  }, [movies]);

  return { movies, loading, error };
};

export default useFetchMovies;

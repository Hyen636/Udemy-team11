import React, { useEffect, useState } from "react";

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getMovies = async () => {
    console.log("run");
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if (movies) setLoading(false);
  }, [movies]);

  return { movies, loading, error };
};

export default useFetchMovies;

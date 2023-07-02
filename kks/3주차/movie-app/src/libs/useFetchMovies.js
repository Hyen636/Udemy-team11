import React, { useEffect, useState } from "react";

/**
 * 영화 데이터를 Fetch하는 커스텀 훅입니다.
 * @param {string} url - movie API
 * @returns {object} - { movies, loading, error } 영화 데이터, 로딩 상태, 에러 정보를 포함하는 객체를 반환합니다.
 */

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getMovies = async () => {
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

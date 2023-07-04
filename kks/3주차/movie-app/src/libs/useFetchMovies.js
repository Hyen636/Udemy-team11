import React, { useEffect, useState } from "react";

/**
 * 영화 데이터를 Fetch하는 커스텀 훅입니다.
 * @param {string} url - movie API
 * @returns {object} - { movies, isLoading, error } 영화 데이터, 로딩 상태, 에러 정보를 포함하는 객체를 반환합니다.
 */

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getMovies(url);
  }, [url]);

  useEffect(() => {
    if (movies) setIsLoading(false);
  }, [movies]);

  return { movies, isLoading, error };
};

export default useFetchMovies;

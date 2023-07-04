import React, { useEffect, useState } from "react";

/**
 * 사용자가 입력한 검색어로 영화를 검색하고, 검색 결과를 처리하는 커스텀 훅입니다.
 * @param {string} query - query
 * @returns {object} - { movies, isLoading, error } 영화 데이터, 로딩 상태, 에러 정보를 포함하는 객체를 반환합니다.
 */

const useSearchMovies = (query) => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(true);
    getMovies();
  }, [query]);

  useEffect(() => {
    if (movies) setIsLoading(false);
  }, [movies]);

  return { movies, isLoading, error };
};

export default useSearchMovies;

import React from "react";

/**
 * 사용자가 영화를 즐겨찾기에 추가하거나 제거할 수 있는 함수를 제공하는 커스텀 훅입니다.
 * @param {any} id - movie_id
 * @param {any} userKey - user_key
 * @returns {object} - { addMovie, deleteMovie } 영화를 즐겨찾기에 추가하거나 제거할 수 있는 함수를 반환합니다.
 */

const useFavoriteMovies = (id, userKey) => {
  const applicationKey = "key";
  const addMovie = async () => {
    await fetch(
      `https://yts.mx/api/v2/add_movie_bookmark.json?user_key=${userKey}&movie_id=${id}$application_key=${applicationKey}`,
      { method: "POST" }
    );
  };
  const deleteMovie = async () => {
    await fetch(
      `https://yts.mx/api/v2/delete_movie_bookmark.json?user_key=${userKey}&movie_id=${id}$application_key=${applicationKey}`,
      { method: "POST" }
    );
  };
  return { addMovie, deleteMovie };
};

export default useFavoriteMovies;

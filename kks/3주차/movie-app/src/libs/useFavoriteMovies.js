import React from "react";

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

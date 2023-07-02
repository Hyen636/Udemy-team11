import React, { useState, useEffct } from "react";

const useFavoriteMovies = (id, userkey) => {
  const application_key = key;
  const addBookmark = async () => {
    fetch(
      `https://yts.mx/api/v2/add_movie_bookmarks.json?user_key=${userkey}&movie_id=${id}&application_key=${application_key}`,
      { method: "POST" }
    );
  };
  const deleteBookmark = async () => {
    fetch(
      `https://yts.mx/api/v2/delete_movie_bookmarks.json?user_key=${userkey}&movie_id=${id}&application_key=${application_key}`,
      { method: "POST" }
    );
  };
  return { addBookmark, deleteBookmark };
};

export default useFavoriteMovies;

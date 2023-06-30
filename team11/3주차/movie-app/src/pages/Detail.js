import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://yts.mx/api/v2/movie_details.json?movie_id=52762")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  console.log(data);

  return (
    <>
      {data ? (
        <div className="movie-d-page">
          <div className="movie-d-container">
            Movie Detail
            <div className="movie-d-navlist">
              <div>Movie Name: {data.data.movie.title}</div>
              <div>
                <img src="https://yts.mx/assets/images/movies/maharashtra_shaheer_2023/medium-cover.jpg"></img>
              </div>
              <div>Release Date: {data.data.movie.year}</div>
              <div>Movie Genre: {data.data.movie.genres}</div>
              <div>Video Quality: {data.data.movie.quality}</div>

              <div>Ratings: {data.data.movie.rating}</div>
              <div>Runtime: {data.data.movie.runtime}</div>
              <div>Likes: {data.data.movie.like_count}</div>

              <div>Plot Summary: {data.data.movie.description_full}</div>
              <div>Director</div>
              <div>Top Cast</div>
              <div>Comments</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default MovieDetail;

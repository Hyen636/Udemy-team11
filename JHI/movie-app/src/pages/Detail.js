import Movie from "components/Movie";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import style from "styles/Detail.module.css";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [suggest, setSuggest] = useState([]);
  const navigate = useNavigate();
  const getDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
    );
    const json = await response.json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, [id]);

  const getSuggestions = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`
    );
    const json = await response.json();
    //console.log(json);
    setSuggest(json.data.movies);
  };
  useEffect(() => {
    getSuggestions();
  }, [id]);

  return (
    <div className={style.detail}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <img
            src={movie.background_image_original}
            alt={movie.title}
            className={style.background_img}
          />
          <img
            src={movie.medium_cover_image}
            alt={movie.title}
            className={style.poster}
          />
          <Link to={"/"}>
            <span>X</span>
          </Link>
          <h1>
            {movie.title}({movie.year})
          </h1>
          <h3>⭐️ {movie.rating} / 10</h3>

          <ul className={style.ul_genre}>
            {movie.genres &&
              movie.genres.map((genre, index) => (
                <li className={style.li_genre} key={index}>
                  {genre}
                </li>
              ))}
          </ul>

          <ul className={style.ul_cast}>
            {movie.cast &&
              movie.cast.map((cast, index) => (
                <li className={style.li_cast} key={index}>
                  {cast.name}
                </li>
              ))}
          </ul>
          <p>{movie.description_intro}</p>
        </>
      )}
      <div className={style.suggestion}>
        <h2>Suggestion</h2>
        {suggest
          ? suggest &&
            suggest.map((movie) => (
              <Movie
                ket={movie.id}
                id={movie.id}
                cover_image={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Detail;

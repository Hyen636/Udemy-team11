import React from "react";
import style from "styles/Home.module.css";
import { Link } from "react-router-dom";

const Movie = ({ id, cover_image, title, year }) => {
  return (
    <div key={id} className={style.movie}>
      <Link to={`/detail/${id}`}>
        <img src={cover_image} alt={title} />
      </Link>
      <h3>
        {title} ({year})
      </h3>
    </div>
  );
};

export default Movie;

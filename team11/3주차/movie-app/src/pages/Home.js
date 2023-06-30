import React from "react";
import { ReactDOM } from "react-dom";
import MovieList from "components/MovieList";
import MovieDetail from "./Detail";

const Home = () => {
  return (
    <div className="movie-boxUI">
      <MovieList />

      <div className="header">
        MovieProject
        <div className="header-nav-list">
          <div>Home</div>
          <div>Search</div>
          <div>Trending</div>
          <div>BrowserMovie</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import Header from "components/Header";
import Loader from "components/Loader";
import Movie from "components/Movie";
import Styles from "styles/Home.module.css";
import React from "react";
import Footer from "components/Footer";
import { useSelector } from "react-redux";

const Search = () => {
  const { movies, isLoading } = useSelector((state) => state.SearchStore);
  return (
    <>
      <Header search={true} />
      {!isLoading ? (
        <div className={Styles.search}>
          <div className={Styles.movieContainer}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                image={movie.medium_cover_image}
                title={movie.title}
                rating={movie.rating}
                runtime={movie.runtime}
                year={movie.year}
              />
            ))}
          </div>
        </div>
      ) : (
        <Loader type="search" />
      )}
      <Footer />
    </>
  );
};

export default Search;

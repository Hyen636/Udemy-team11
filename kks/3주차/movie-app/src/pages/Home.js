import React, { useState } from "react";
import useMoive from "api/useMovie";
import Header from "components/Header";
import Movie from "components/Movie";
import Styles from "styles/Home.module.css";
import Loader from "components/Loader";
import Footer from "components/Footer";
import useFetchMovies from "libs/useFetchMovies";
import usePagination from "libs/usePagination";

const Home = () => {
  /*   const { movieData, loading } = useMoive({
    url: "list_movies.json?minimum_rating=8&limit=20&sort_by=like_count",
  });
  const { movieData: ratingData, loading: ratingLoading } = useMoive({
    url: "list_movies.json?minimum_rating=8&limit=10&sort_by=rating",
  });
  const { movieData: yearData, loading: yearLoading } = useMoive({
    url: "list_movies.json?minimum_rating=8&limit=10&sort_by=year",
  }); */

  const [pageCount, setPageCount] = useState(10);
  const [inputValue, setInputValue] = useState(0);
  const onSubmit = (event) => {
    event.preventDefault();
    setPageCount(inputValue);
  };

  const { movies, loading, error } = useFetchMovies(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&limit=50&sort_by=like_count"
  );

  const { page, nextPage, prevPage, movePage, maxPage, sliceData } =
    usePagination(movies && movies.data.movies, pageCount);

  return (
    <>
      <Header />
      <div className={Styles.home}>
        {loading ? (
          <Loader />
        ) : (
          <div className={Styles.movieContaiber}>
            {sliceData.map((movie) => (
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
        )}
        {/*         <div>
          <div className={Styles.movieSectionTitle}>Rating</div>
          {ratingLoading ? null : (
            <div className={Styles.movieSection}>
              {ratingData.map((movie) => (
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
          )}
        </div>
        <div>
          <div className={Styles.movieSectionTitle}>Latest</div>
          {yearLoading ? null : (
            <div className={Styles.movieSection}>
              {yearData.map((movie) => (
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
          )}
        </div> */}
        <form onSubmit={onSubmit}>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <div>
          <div>page:{page}</div>
          <button onClick={prevPage}>◀︎</button>
          <ul>
            {Array(maxPage)
              .fill({})
              .map((_, index) => (
                <li key={index} onClick={() => movePage(index + 1)}>
                  {index + 1}
                </li>
              ))}
          </ul>
          <button onClick={nextPage}>▶︎</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

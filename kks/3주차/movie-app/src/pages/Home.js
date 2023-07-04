import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Movie from "components/Movie";
import Styles from "styles/Home.module.css";
import Loader from "components/Loader";
import Footer from "components/Footer";
import useFetchMovies from "libs/useFetchMovies";
import usePagination from "libs/usePagination";
import { useDispatch, useSelector } from "react-redux";
import { updateMovieStore } from "redux/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [pageCount, setPageCount] = useState(10);
  const [inputValue, setInputValue] = useState(10);
  const onSubmit = (event) => {
    event.preventDefault();
    setPageCount(inputValue);
  };

  const { movies, error } = useFetchMovies(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&limit=50&sort_by=like_count"
  );

  const { movies: homeMovies, isLoading: homeIsLoading } = useSelector(
    (state) => state.MovieStore
  );

  const { page, nextPage, prevPage, movePage, maxPage, sliceData } =
    usePagination(homeMovies, pageCount);

  useEffect(() => {
    if (!movies) return;
    dispatch(
      updateMovieStore({ movies: movies.data.movies, isLoading: false })
    );
  }, [movies, dispatch]);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  return (
    <>
      <Header />
      <div className={Styles.home}>
        {!homeIsLoading && sliceData ? (
          <div className={Styles.hone}>
            <form onSubmit={onSubmit} className={Styles.pageForm}>
              <label>Movies per page</label>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </form>
            <div className={Styles.movieContainer}>
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
            <div className={Styles.pageList}>
              <button onClick={prevPage}>◀︎</button>
              <ul>
                {Array(maxPage)
                  .fill({})
                  .map((_, index) => (
                    <li
                      key={index}
                      onClick={() => movePage(index + 1)}
                      style={{ fontWeight: page === +(index + 1) && "bold" }}
                    >
                      {index + 1}
                    </li>
                  ))}
              </ul>
              <button onClick={nextPage}>▶︎</button>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;

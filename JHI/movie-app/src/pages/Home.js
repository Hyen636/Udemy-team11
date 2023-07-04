import React, { useState } from "react";
import useFetchMovies from "hooks/useFetchMovies";
import style from "styles/Home.module.css";
import Movie from "components/Movie";
import usePagenation from "hooks/usePagenation";

function Home() {
  const [limit, setLimit] = useState(50);
  const {
    currentPage,
    firstPage,
    nextPage,
    prevPage,
    chageCurrentPage,
    toLastPage,
  } = usePagenation(1);
  const { loading, movies, count, error } = useFetchMovies(
    `https://yts.mx/api/v2/list_movies.json?sort_by=like_count&limit=${limit}&page=${currentPage}&movie_count`
  );
  const lastPage = Math.ceil(count / limit);
  const array = [];
  for (let i = 0; i < lastPage; i++) {
    array.push(i + 1);
  }
  const slice = array.slice(currentPage - 1, currentPage + 4);
  console.log(currentPage);
  return (
    <div className={style.main}>
      {!loading && movies ? (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            cover_image={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      <div>
        {currentPage !== 1 ? (
          <>
            <button onClick={firstPage}>처음</button>
            <button onClick={prevPage}>이전</button>
          </>
        ) : (
          <></>
        )}
        {slice.map((btn, index) => (
          <button key={index} onClick={chageCurrentPage}>
            {btn}
          </button>
        ))}
        {currentPage !== lastPage ? (
          <>
            <button onClick={nextPage}>다음</button>
            <button>맨끝</button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Home;

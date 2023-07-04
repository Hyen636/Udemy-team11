import React, { useEffect } from "react";
import Loader from "components/Loader";
import Movie from "components/Movie";
import Styles from "styles/Detail.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Actor from "components/Actor";
import { useDispatch, useSelector } from "react-redux";
import useFetchMovies from "libs/useFetchMovies";
import { updateDetailStore } from "redux/detailSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { movies, error } = useFetchMovies(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_cast=true`
  );

  const { movies: relatedMovies, error: relatedError } = useFetchMovies(
    `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`
  );

  const DetailStore = useSelector((state) => state.DetailStore);

  useEffect(() => {
    if (movies && relatedMovies) {
      dispatch(
        updateDetailStore({
          movie: movies.data.movie,
          relatedMovies: relatedMovies.data.movies,
          isLoading: false,
        })
      );
    }
  }, [movies, relatedMovies, dispatch]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (relatedError) {
      console.log(relatedError);
    }
  }, [error, relatedError]);

  return (
    <>
      {DetailStore.isLoading ? (
        <Loader />
      ) : (
        <div className={Styles.detail}>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${DetailStore.movie.background_image})`,
            }}
            className={Styles.detailBackground}
          >
            <div className={Styles.detailHeader}>
              <button onClick={() => navigate(-1)}>〈</button>
              <button onClick={() => navigate("/")}>𝖷</button>
            </div>
            <div className={Styles.detailContainer}>
              <img
                src={DetailStore.movie.large_cover_image}
                className={Styles.detailProfileImg}
                alt="poster"
              />
              <div className={Styles.detailProfile}>
                <div className={Styles.detailTitle}>
                  <div className={Styles.detailYear}>
                    {DetailStore.movie.year}
                  </div>
                  <h1>{DetailStore.movie.title}</h1>
                </div>
                <div className={Styles.detailRating}>
                  {DetailStore.movie.rating} / 10
                </div>
                <ul className={Styles.detailGenre}>
                  {DetailStore.movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
                <div className={Styles.detailRuntime}>
                  {DetailStore.movie.runtime !== 0
                    ? `Runtime : ${DetailStore.movie.runtime}m`
                    : null}
                </div>
                <div className={Styles.detailDescription}>
                  {DetailStore.movie.description_intro.length > 500
                    ? DetailStore.movie.description_intro.substring(0, 500) +
                      "..."
                    : DetailStore.movie.description_intro}
                </div>
                {DetailStore.movie.cast ? (
                  <>
                    <div className={Styles.detailActorTitle}>Actor</div>
                    <div className={Styles.detailActorList}>
                      {DetailStore.movie.cast.map((cast) => (
                        <Actor
                          key={cast.imdb_code}
                          img={cast.url_small_image}
                          name={cast.name}
                          character={cast.character_name}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
              <div>
                <div className={Styles.related}>
                  <div className={Styles.relatedTitle}>Related Movie</div>
                  <ul className={Styles.relatedList}>
                    {DetailStore.relatedMovies.map((movie) => (
                      <Movie
                        key={movie.id}
                        id={movie.id}
                        image={movie.medium_cover_image}
                        title={movie.title}
                        rating={movie.rating}
                        runtime={movie.runtime}
                        year={movie.year}
                        type="small"
                      />
                    ))}
                  </ul>
                </div>

                <div className={Styles.detailLink}>
                  <div className={Styles.detailLinkTitle}>Link</div>
                  <div className={Styles.detailLinkList}>
                    <Link
                      to={`https://www.youtube.com/embed/${DetailStore.movie.yt_trailer_code}?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3`}
                    >
                      YOUTUBE LINK
                    </Link>
                    <Link to={DetailStore.movie.url}>MOVIE LINK</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;

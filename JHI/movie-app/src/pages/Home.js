import { useEffect, useState } from "react";
import style from "styles/Home.module.css";
import Movie from "components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=5&sort_by=like_count"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={style.main}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            cover_image={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
          />
        ))
      )}
    </div>
  );
}

export default Home;

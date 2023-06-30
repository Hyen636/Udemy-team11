import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function MovieList() {
  const [data, setData] = useState(""); //data를 저장

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {data.data.movies.map((item) => {
            return (
              <Link to={`/detail/${item.id}`} key={item.id}>
                <div>
                  {item.title}
                  <img src={item.background_image}></img>
                </div>
              </Link>
            );
          })}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default MovieList;

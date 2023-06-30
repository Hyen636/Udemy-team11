import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  console.log(location);
  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams);
  const query = queryParams.get("query");
  useEffect(() => console.log(query), [query]);
  //query가 바뀔때마다 콘솔에 찍히게 useEffect를 사용
  return (
    <div>
      <h1>SearchResults</h1>
      <h3>Search: {query}</h3>
    </div>
  );
};

export default SearchResults;

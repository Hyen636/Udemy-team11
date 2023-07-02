import React, { useState, useEffect } from "react";

const usePagenation = (initalValue) => {
  const [currentPage, setCurrentPage] = useState(initalValue);

  const firstPage = () => {
    return setCurrentPage(1);
  };

  const nextPage = () => {
    return (
      setCurrentPage((prev) => prev + 1),
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  };
  const prevPage = () => {
    return (
      setCurrentPage((prev) => prev - 1),
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  };

  const chageCurrentPage = (e) => {
    setCurrentPage(Number(e.target.innerHTML));
  };

  const toLastPage = () => {
    setCurrentPage();
  };

  return {
    currentPage,
    firstPage,
    nextPage,
    prevPage,
    chageCurrentPage,
    toLastPage,
  };
};

export default usePagenation;

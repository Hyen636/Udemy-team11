import React, { useEffect, useState } from "react";

const usePagination = (data, count) => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();
  const [sliceData, setSliceData] = useState();

  const nextPage = () => {
    if (page < maxPage) {
      setPage((pre) => pre + 1);
      window.scrollTo({ top: 0 });
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage((pre) => pre - 1);
      window.scrollTo({ top: 0 });
    }
  };
  const movePage = (order) => {
    setPage(order);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    if (!data) return;
    setMaxPage(Math.round(data.length / count));
    setPage(1);
  }, [data, count]);

  useEffect(() => {
    if (!data) return;
    setSliceData(data.slice((page - 1) * count, page * count));
  }, [data, page, count]);

  return { page, nextPage, prevPage, movePage, maxPage, sliceData };
};

export default usePagination;

import React, { useEffect, useState } from "react";

/**
 * 사용자가 다른 페이지로 이동할 수 있도록 페이지 번호를 관리하는 커스텀 훅입니다.
 * @param {array} data - 영화 데이터 배열
 * @param {number} count - 페이지당 보여지는 영화의 개수
 * @returns {object} - { page, nextPage, prevPage, movePage, maxPage, sliceData } 현재 페이지, 이전 페이지 이동 함수, 다음 페이지 이동 함수, 해당 페이지 이동 함수, 전체 페이지 개수, 나눠진 영화 배열
 */

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

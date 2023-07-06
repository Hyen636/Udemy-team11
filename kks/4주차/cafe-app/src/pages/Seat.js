import React from "react";
import { useLocation } from "react-router-dom";

const Seat = () => {
  //  Link state를 통해 받아온 카페 좌석 데이터 입니다.
  // 좌석은 객체로 구성하여 자리가 비어있으면 true, 차 있으면 false, 존재하지 않는 자리면 null값을 가지고 있습니다.
  const location = useLocation();
  return <h1>Seat</h1>;
};

export default Seat;

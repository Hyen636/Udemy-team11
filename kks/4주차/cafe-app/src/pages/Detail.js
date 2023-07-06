import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Detail = () => {
  // useParams을 통해 카페 id를 가져옵니다.
  const params = useParams();
  //  Link state를 통해 받아온 카페 데이터 입니다.
  const location = useLocation();
  return (
    <>
      <h1>Detail</h1>
      <Link to={`/cafe/${params.id}/seat`} state={location.state.seat}>
        좌석 현황
      </Link>
    </>
  );
};

export default Detail;

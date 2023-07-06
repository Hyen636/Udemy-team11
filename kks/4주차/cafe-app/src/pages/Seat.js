import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Styles from "../styles/Seat.module.css";

const Seat = () => {
  const [seats, setSeats] = useState([]);
  const navigate = useNavigate();
  //  Link state를 통해 받아온 카페 좌석 데이터 입니다.
  // 좌석은 객체로 구성하여 자리가 비어있으면 true, 차 있으면 false, 존재하지 않는 자리면 null값을 가지고 있습니다.
  const location = useLocation();
  const seatArray = () => {
    for (let i = 0; i < Object.keys(location.state.seat).length; i++) {
      setSeats((pre) => [...pre, location.state.seat[`seat-${i + 1}`]]);
    }
  };
  useEffect(() => {
    seatArray();
  }, []);
  return (
    <div className={Styles.seat}>
      <div className={Styles.seatHeader}>
        <div className={Styles.seatBackBtn} onClick={() => navigate(-1)}>
          〈
        </div>
        <h1 className={Styles.seatTitle}>{location.state.name}</h1>
        <div></div>
      </div>
      <div className={Styles.seatContainer}>
        {seats.map((seat, index) => (
          <div
            key={index}
            className={Styles.seatContainerList}
            style={{
              backgroundColor: seat && "#30a2ff",
              display: seat === null && "none",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Seat;

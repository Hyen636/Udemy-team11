import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Styles from "../styles/Detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHeart,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

const Detail = () => {
  const navigate = useNavigate();
  // useParams을 통해 카페 id를 가져옵니다.
  const params = useParams();
  //  Link state를 통해 받아온 카페 데이터 입니다.
  const location = useLocation();
  return (
    <div className={Styles.detail}>
      <div className={Styles.detailHeader}>
        <div className={Styles.detailBackBtn} onClick={() => navigate(-1)}>
          〈
        </div>
        <h1 className={Styles.detailTitle}>{location.state.name}</h1>
        <div className={Styles.detailLike}>
          <FontAwesomeIcon icon={faSquareInstagram} color="black" />
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      <div className={Styles.detailBox}>
        <img src={location.state.imageUrl} className={Styles.detailImg} />
        <div className={Styles.detailContent}>
          <div className={Styles.detailInfo}>
            <div>
              <FontAwesomeIcon icon={faLocationPin} />
              {location.state.address.slice(0, 12)}...
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} />
              {location.state.time.open} - {location.state.time.close}
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              {location.state.phone}
            </div>
          </div>
          <Link to={`/cafe/${params.id}/seat`} state={location.state}>
            좌석 현황
          </Link>
        </div>
        <div className={Styles.detailMenu}>
          <span className={Styles.detailMenuTitle}>메뉴</span>
          <ul>
            {location.state.menu.map((item) => (
              <li>
                {item.name} ----- {item.price}원
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;

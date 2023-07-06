import React from "react";
import Styles from "../styles/Cafe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Cafe = ({ name, url, address, types }) => {
  return (
    <div className={Styles.cafe}>
      <div className={Styles.cafeImg}>
        <img src={url} />
      </div>
      <div className={Styles.cafeContent}>
        <div className={Styles.cafeHeader}>
          <span className={Styles.cafeTitle}>{name}</span>
          <span className={Styles.cafeLike}>
            <FontAwesomeIcon icon={faHeart} />{" "}
          </span>
        </div>
        <div className={Styles.cafeAddress}>{address.slice(0, 12)}...</div>
        <div className={Styles.cafeTypes}>
          {types.map((type) => (
            <div className={Styles.cafeType}>{type}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cafe;

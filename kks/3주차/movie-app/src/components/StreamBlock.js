import React from "react";
import { Link } from "react-router-dom";
import Styles from "styles/StreamBlock.module.css";

const StreamBlock = ({ title, content, id, url }) => {
  return (
    <Link to={`/stream/${id}`} state={{ url }}>
      <div className={Styles.StreamBlock}>
        <div className={Styles.StreamBlockTitle}>{title}</div>
        <div>🎬 {content}</div>
      </div>
    </Link>
  );
};

export default StreamBlock;

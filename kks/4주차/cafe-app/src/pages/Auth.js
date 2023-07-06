import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import Styles from "../styles/Auth.module.css";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Auth = () => {
  const provider = new GoogleAuthProvider();
  // 팝업을 통한 구글 로그인입니다.
  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, provider);
  };
  return (
    <div className={Styles.auth}>
      <h1 className={Styles.logo}>
        <span>Give MY___</span>
        <span>
          Seat <FontAwesomeIcon icon={faMugHot} size="sm" />
        </span>
      </h1>
      <div className={Styles.loginContainer}>
        <span style={{ cursor: "pointer" }} onClick={handleGoogleLogin}>
          Google 로그인으로 시작하기
        </span>
      </div>
    </div>
  );
};

export default Auth;

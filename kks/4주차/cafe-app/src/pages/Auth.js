import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const Auth = () => {
  const provider = new GoogleAuthProvider();
  // 팝업을 통한 구글 로그인입니다.
  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, provider);
  };
  return (
    <>
      <h1>Auth</h1>
      <span style={{ cursor: "pointer" }} onClick={handleGoogleLogin}>
        Google 로그인으로 시작하기
      </span>
    </>
  );
};

export default Auth;

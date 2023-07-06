import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const Auth = () => {
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, provider);
  };
  return (
    <div>
      <h1>Auth</h1>
      <p onClick={handleGoogleLogin}>Google 로그인으로 시작하기</p>
    </div>
  );
};

export default Auth;

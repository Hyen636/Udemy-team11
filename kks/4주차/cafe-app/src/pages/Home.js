import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  const [cafes, setCafes] = useState([]);
  // 부모 컴포넌트로 받은 유저의 아이디와 firestore에 저장되어있는 카페의 유저 아이디 배열과 비교하여 카페를 구분합니다.
  const getCafes = async () => {
    const querySnapshot = await getDocs(collection(db, "cafes"));
    querySnapshot.forEach((doc) => {
      if (doc.data().users.includes(user.uid)) {
        // 카페 정보와 카페 id를 담아 카페를 저장합니다.
        const cafe = { ...doc.data(), id: doc.id };
        setCafes((pre) => [...pre, cafe]);
      }
    });
  };
  useEffect(() => {
    getCafes();
  }, []);
  return (
    <>
      <h1>Home</h1>
      {cafes.map((cafe) => (
        <Link key={cafe.id} to={`/cafe/${cafe.id}`} state={cafe}>
          {cafe.name}
        </Link>
      ))}
    </>
  );
};

export default Home;

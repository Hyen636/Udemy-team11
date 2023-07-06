import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

export default function Home({ user }) {
  const [cafes, setCafes] = useState([]);
  const getCafes = async () => {
    const querySnapshot = await getDocs(collection(db, "cafes"));
    querySnapshot.forEach((doc) => {
      if (doc.data().users.includes(user.uid)) {
        const cafe = { ...doc.data(), id: doc.id };
        setCafes((pre) => [...pre, cafe]);
      }
      console.log(doc.data());
    });
  };
  useEffect(() => {
    getCafes();
  }, []);
  return (
    <div>
      <h1>구독 리스트</h1>
      <div>
        {cafes.map((cafe, index) => (
          <Link key={index} to={`/cafe/${cafe.id}`} state={cafe}>
            <div>
              <img src={cafe.imageUrl} />
              <h3>{cafe.name}</h3>
              <ul>
                {cafe.types.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

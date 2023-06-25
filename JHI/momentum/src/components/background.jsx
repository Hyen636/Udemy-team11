import React from "react";
import img1 from "../images/01.jpeg";
import img2 from "../images/02.jpeg";
import img3 from "../images/03.jpeg";
import img4 from "../images/04.jpeg";
import img5 from "../images/05.jpeg";
import img6 from "../images/06.jpeg";
import img7 from "../images/07.jpeg";
import img8 from "../images/08.jpeg";
import img9 from "../images/09.jpeg";
import img10 from "../images/10.jpeg";
import img11 from "../images/11.jpeg";

function RandomBG() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  return <img src={chosenImage} alt="img"></img>;
}

function Background() {
  return <RandomBG />;
}

export default Background;

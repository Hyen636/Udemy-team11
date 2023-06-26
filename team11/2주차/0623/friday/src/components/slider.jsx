import React, { useState } from "react";
import image1 from "images/image_1.jpeg";
import image2 from "images/image_2.jpeg";
import image3 from "images/image_3.jpeg";
import image4 from "images/image_4.jpeg";
import image5 from "images/image_5.jpeg";

const Slider = () => {
  const images = [image1, image2, image3, image4, image5];
  const [order, setOrder] = useState(0);
  const onRight = () => {
    if (order === images.length - 1) {
      setOrder(0);
    } else {
      setOrder((pre) => pre + 1);
    }
  };
  const onLeft = () => {
    if (order === 0) {
      setOrder(images.length - 1);
    } else {
      setOrder((pre) => pre - 1);
    }
  };
  return (
    <>
      <img src={images[order]} width={300} />
      <button onClick={onLeft}>◀︎</button>
      <button onClick={onRight}>▶︎</button>
    </>
  );
};

export default Slider;

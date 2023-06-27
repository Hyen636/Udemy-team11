import React from "react";
import Footer from "components/footer";
import Main from "components/main";
import Weather from "components/weather";
import { useState } from "react";
import { useEffect } from "react";
import image_1 from "images/image_1.jpg";
import image_2 from "images/image_2.jpg";
import image_3 from "images/image_3.jpg";
import image_4 from "images/image_4.jpg";
import image_5 from "images/image_5.jpg";
import image_6 from "images/image_6.jpg";
import image_7 from "images/image_7.jpg";
import image_8 from "images/image_8.jpg";
import image_9 from "images/image_9.jpg";
import image_10 from "images/image_10.jpg";

const Background = () => {
  const images = [
    {
      image: image_1,
      quote:
        "고통이 너를 붙잡고 있는 것이 아니다. 네가 그 고통을 붙잡고 있는 것이다.",
    },
    {
      image: image_2,
      quote:
        "세상에는 비방만 받고, 칭찬만 받는 사람은 지난날에도 없었고 지금도 없으며, 앞으로도 없을 것이다.",
    },
    {
      image: image_3,
      quote: "바다는 비에 젖지 않는다",
    },
    {
      image: image_4,
      quote: "원하는 것을 얻지 못하는 것이 때로는 행운이라는 것을 명심하라.",
    },
    {
      image: image_5,
      quote: " 다른 사람으로 인해 마음이 흔들려서는 안 됩니다.",
    },
    {
      image: image_6,
      quote: "하나의 일이 모든 면에서 부정적인 경우는 거의 없습니다.",
    },
    {
      image: image_7,
      quote:
        "때로 자신이 원하는 것을 얻지 못하는 것이  행운일 수 있다는 것을 기억해야 합니다.",
    },
    {
      image: image_8,
      quote: "때로는 침묵이 최고의 대답입니다.",
    },
    {
      image: image_9,
      quote: "문제에 해법이 없다면 걱정으로 시간을 낭비하지 마세요.",
    },
    {
      image: image_10,
      quote: "규칙은 잘 알아야 더욱 효과적으로 파괴할 수 있습니다.",
    },
  ];
  const [randomNumber, setRandomNumber] = useState(0);

  const onRandom = () => {
    setRandomNumber(Math.floor(Math.random() * images.length));
  };

  useEffect(() => {
    onRandom();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${images[randomNumber].image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        color: "#fff",
        fontFamily: "Noto Sans KR",
      }}
    >
      <Weather />
      <Main />
      <Footer quote={images[randomNumber].quote} />
    </div>
  );
};

export default Background;

const background = document.querySelector("body");
const quote = document.querySelector(".quote");

const images = [
  {
    image: "image_1.jpg",
    quote:
      "고통이 너를 붙잡고 있는 것이 아니다. 네가 그 고통을 붙잡고 있는 것이다.",
  },
  {
    image: "image_2.jpg",
    quote:
      "세상에는 비방만 받고, 칭찬만 받는 사람은 지난날에도 없었고 지금도 없으며, 앞으로도 없을 것이다.",
  },
  {
    image: "image_3.jpg",
    quote: "바다는 비에 젖지 않는다",
  },
  {
    image: "image_4.jpg",
    quote: "원하는 것을 얻지 못하는 것이 때로는 행운이라는 것을 명심하라.",
  },
  {
    image: "image_5.jpg",
    quote: " 다른 사람으로 인해 마음이 흔들려서는 안 됩니다.",
  },
  {
    image: "image_6.jpg",
    quote: "하나의 일이 모든 면에서 부정적인 경우는 거의 없습니다.",
  },
  {
    image: "image_7.jpg",
    quote:
      "때로 자신이 원하는 것을 얻지 못하는 것이  행운일 수 있다는 것을 기억해야 합니다.",
  },
  {
    image: "image_8.jpg",
    quote: "때로는 침묵이 최고의 대답입니다.",
  },
  {
    image: "image_9.jpg",
    quote: "문제에 해법이 없다면 걱정으로 시간을 낭비하지 마세요.",
  },
  {
    image: "image_10.jpg",
    quote: "규칙은 잘 알아야 더욱 효과적으로 파괴할 수 있습니다.",
  },
];

const getRandom = () => {
  const randomNumber = Math.floor(Math.random() * images.length);
  background.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url("./images/${images[randomNumber].image}")`;
  quote.innerText = images[randomNumber].quote;
};

getRandom();

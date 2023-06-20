const clockContinaer = document.querySelector(".clock");
const clockTitle = clockContinaer.querySelector(".clock__title");

const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `${hours < 10 ? hours.toString().padStart(2, "0") : hours}:${
    minutes < 10 ? minutes.toString().padStart(2, "0") : minutes
  }:${seconds < 10 ? seconds.toString().padStart(2, "0") : seconds}`;

  clockTitle.innerText = time;
};

setInterval(getTime, 1000);

getTime();

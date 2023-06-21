const greetingForm = document.querySelector(".greeting__form");
const greetingTitle = document.querySelector(".greeting__title");
const greetingInput = greetingForm.querySelector(".greeting__form__input");

const onGreeting = (event) => {
  event.preventDefault();
  const time = new Date().getHours();
  let greetingMsg;
  if (time >= 6 && time < 12) {
    greetingMsg = `Good morning, ${greetingInput.value}.`;
  } else if (time >= 12 && time < 18) {
    greetingMsg = `Good afternoom, ${greetingInput.value}.`;
  } else if (time >= 18 && time < 22) {
    greetingMsg = `Good evening, ${greetingInput.value}.`;
  } else {
    greetingMsg = `Good night, ${greetingInput.value}.`;
  }
  greetingTitle.innerText = greetingMsg;
  greetingInput.classList.add("hidden");
};

greetingForm.addEventListener("submit", onGreeting);

const greetingForm = document.querySelector(".greeting__form");
const greetingTitle = document.querySelector(".greeting__title");
const greetingInput = greetingForm.querySelector(".greeting__form__input");
const changeBtn = document.querySelector(".change-name-btn");
const todoSection = document.querySelector(".todo");

const NAME = "name";

const getLocalName = () => {
  const localName = localStorage.getItem(NAME);
  if (localName) {
    printeGreeting(localName);
    greetingInput.value = localName;
  }
};

const onChangeName = () => {
  greetingForm.classList.remove("hidden");
  changeBtn.classList.add("hidden--visi");
  todoSection.classList.add("hidden");
};

const printeGreeting = (name) => {
  const time = new Date().getHours();
  let greetingMsg;
  if (time >= 6 && time < 12) {
    greetingMsg = `Good morning, ${name}.`;
  } else if (time >= 12 && time < 18) {
    greetingMsg = `Good afternoom, ${name}.`;
  } else if (time >= 18 && time < 22) {
    greetingMsg = `Good evening, ${name}.`;
  } else {
    greetingMsg = `Good night, ${name}.`;
  }
  greetingTitle.innerText = greetingMsg;
  greetingForm.classList.add("hidden");
  changeBtn.classList.remove("hidden--visi");
  todoSection.classList.remove("hidden");
};

const onGreeting = (event) => {
  event.preventDefault();
  printeGreeting(greetingInput.value);
  localStorage.setItem(NAME, greetingInput.value);
};

greetingForm.addEventListener("submit", onGreeting);
changeBtn.addEventListener("click", onChangeName);

getLocalName();

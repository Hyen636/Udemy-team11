const userForm = document.querySelector("#user");
const nameInput = document.querySelector("#user__name");
const msgInput = document.querySelector("#user__msg");
const submitBtn = document.querySelector("#user__submit");
const chat = document.querySelector(".chat");

const printMsg = (name, msg) => {
  const newChat = document.createElement("div");
  const newChatName = document.createElement("span");
  const newChatMsg = document.createElement("span");
  newChatName.innerText = `${name}: `;
  newChatName.className = "chat__box__name";
  newChatMsg.innerText = msg;
  newChatMsg.className = "chat__box__msg";
  newChat.appendChild(newChatName);
  newChat.appendChild(newChatMsg);
  chat.appendChild(newChat);
};

const addMsg = (event) => {
  event.preventDefault();
  const userName = nameInput.value;
  const userMsg = msgInput.value;
  printMsg(userName, userMsg);
  msgInput.value = "";
};

userForm.addEventListener("submit", addMsg);

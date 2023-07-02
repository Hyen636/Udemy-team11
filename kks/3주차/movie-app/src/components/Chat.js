import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Styles from "styles/Chat.module.css";

const socket = io("http://localhost:3001");

function Chat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [chatDisplay, setChatDisplay] = useState(false);

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = (message) => {
    setMessages((pre) => [...pre, message]);
  };

  const handleMessageSubmit = (evnet) => {
    evnet.preventDefault();
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      socket.emit("message", {
        username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };

  return (
    <>
      <div
        className={Styles.chat}
        style={{ display: chatDisplay ? "flex" : "none" }}
      >
        <div className={Styles.chatContainer}>
          <div className={Styles.chatHeader}>
            <div className={Styles.chatTitle}>Chat</div>
            <div
              className={Styles.chatCancle}
              onClick={() => setChatDisplay(false)}
            >
              𝖷
            </div>
          </div>
          <div className={Styles.chatList}>
            {messages.map((message, index) => (
              <p key={index}>
                {message.username} : {message.content} - {message.time}
              </p>
            ))}
          </div>
          <form className={Styles.chatForm}>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="사용자 이름"
              className={Styles.chatName}
            />
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="메세지"
              className={Styles.chatMessage}
            />
            <input
              type="submit"
              onClick={handleMessageSubmit}
              value={"전송"}
              className={Styles.chatSubmit}
            />
          </form>
        </div>
      </div>
      <div
        className={Styles.chatBtn}
        onClick={() => setChatDisplay(true)}
        style={{ display: !chatDisplay ? "block" : "none" }}
      >
        Chat
      </div>
    </>
  );
}

export default Chat;

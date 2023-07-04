import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import Styles from "styles/StreamBox.module.css";

const socket = io("http://localhost:3001");

const StreamBox = () => {
  const location = useLocation();
  const url = location.state.url;
  const query = new URL(url).searchParams.get("v");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {}, []);

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      const id = Date.now();
      socket.emit("message", {
        id,
        username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };
  const handleMessage = (message) => {
    setMessages((pre) => [...pre, message]);
  };

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);
  return (
    <>
      <div className={Styles.streamBox}>
        <div className={Styles.streamContainer}>
          <iframe
            src={`https://www.youtube.com/embed/${query}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className={Styles.streamChat}>
            <div className={Styles.streamChatTitle}>실시간 채팅</div>
            <ul className={Styles.streamChatContainer}>
              {messages.map((message) => (
                <li key={message.id}>
                  {message.username} : {message.content} - {message.time}
                </li>
              ))}
            </ul>
            <form className={Styles.streamChatForm} onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="사용자 이름"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="메세지"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <input
                type="submit"
                value={"전송"}
                className={Styles.streamBoxChatSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StreamBox;

import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

function Chat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]); //message는 계속해서 쌓이기 때문에 리스트로
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  });

  const handleMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleMessageSubmit = () => {
    if (inputValue.trim() !== "") {
      //trim() = 앞뒤 공백 제거
      const currentTime = new Date().toLocaleDateString();
      socket.emit("message", {
        username,
        current: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };

  return (
    <div>
      <div>
        <h1>실시간 채팅</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="사용자명을 입력하세요."
        />
        <h2>채팅</h2>
        <div>
          {messages.map((message, index) => (
            <p key={index}>
              {message.username} : {message.current} - {message.time}
            </p>
          ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button onClick={handleMessageSubmit}>전송</button>
      </div>
    </div>
  );
}

export default Chat;

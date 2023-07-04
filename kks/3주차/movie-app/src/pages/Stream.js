import Header from "components/Header";
import React, { useState } from "react";
import Footer from "components/Footer";
import Styles from "styles/Stream.module.css";
import StreamBlock from "components/StreamBlock";

const Stream = () => {
  const [streams, setStreams] = useState([]);
  const [addBoxHidden, setAddBoxHidden] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setStreams((pre) => [...pre, { title, content, url }]);
    setAddBoxHidden(true);
  };
  return (
    <>
      <Header />
      <div className={Styles.stream}>
        <div className={Styles.streamContainer}>
          {streams.map((stream, index) => (
            <StreamBlock
              key={index}
              title={stream.title}
              content={stream.content}
              id={index}
              url={stream.url}
            />
          ))}
        </div>
      </div>
      <div
        className={Styles.streamAdd}
        style={{ display: addBoxHidden ? "none" : "flex" }}
      >
        <div className={Styles.streamAddBox}>
          <div className={Styles.streamAddTitle}>New Stream</div>
          <form className={Styles.streamAddForm} onSubmit={onSubmit}>
            <input
              type="string"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="string"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <input
              type="string"
              placeholder="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <input
              type="submit"
              value={"Create"}
              className={Styles.streamAddSubmit}
            />
            <input
              type="button"
              value={"Cancle"}
              className={Styles.streamAddCancel}
              onClick={() => setAddBoxHidden(true)}
            />
          </form>
        </div>
      </div>
      <div
        className={Styles.streamAddBtn}
        onClick={() => setAddBoxHidden(false)}
      >
        +
      </div>
      <Footer />
    </>
  );
};

export default Stream;

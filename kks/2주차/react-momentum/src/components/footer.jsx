import React from "react";
import Quote from "components/quote";

const Footer = ({ quote }) => {
  return (
    <footer
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        padding: 25,
      }}
    >
      <Quote quote={quote} />
    </footer>
  );
};

export default Footer;

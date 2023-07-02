import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Search from "pages/Search";
import Chat from "components/chat";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Chat />
      <Footer />
    </Router>
  );
}

export default App;

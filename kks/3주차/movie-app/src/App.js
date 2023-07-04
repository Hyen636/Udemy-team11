import Detail from "pages/Detail";
import Home from "pages/Home";
import Search from "pages/Search";
import Styles from "styles/App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "components/Chat";
import Stream from "pages/Stream";
import StreamBox from "pages/StreamBox";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/stream/:id" element={<StreamBox />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      {/* <Chat /> */}
    </Router>
  );
}

export default App;

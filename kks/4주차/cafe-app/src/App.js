import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Seat from "./pages/Seat";
import Styles from "./styles/App.module.css";

function App() {
  // 로그인 유무와 로그인시 유저의 정보를 상태 관리합니다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  // firebase의 onAuthStateChanged를 사용하여 유저를 확인합니다.
  useState(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  return (
    <Router>
      <div className={Styles.app}>
        <Routes>
          {/* 로드인 유무에 따라 다른 컴포넌트를 라우팅 합니다. */}
          {isLoggedIn ? (
            <Route path="/" element={<Home user={user} />} />
          ) : (
            <Route path="/" element={<Auth />} />
          )}
          <Route path="/cafe/:id" element={<Detail />} />
          <Route path="/cafe/:id/seat" element={<Seat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

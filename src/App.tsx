import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import "./styles/theme.css";

import { Home } from "./pages/Home";
import { Steps } from "./pages/Steps";
import { Steps2 } from "./pages/Steps2";
import { Steps3 } from "./pages/Steps3";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/steps/2" element={<Steps2 />} />
        <Route path="/steps/3" element={<Steps3 />} />
      </Routes>
    </Router>
  );
}

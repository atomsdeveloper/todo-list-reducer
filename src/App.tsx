import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import "./styles/theme.css";

import { Home } from "./pages/Home";
import { Steps } from "./pages/Steps";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<Steps />} />
      </Routes>
    </Router>
  );
}

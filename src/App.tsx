import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Program from "./pages/Program";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/program" element={<Program />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
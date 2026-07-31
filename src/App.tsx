import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Dashboard";
import background from "./assets/images/flower_bg.png";

export default function App() {
  return (
    <div className="relative min-h-screen">
  {/* Background */}
  <div
    className="absolute inset-0 -z-10"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
    }}
  />

  {/* White overlay */}
  <div className="absolute inset-0 bg-white/20 -z-10" />

  {/* Website */}
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
</div>
  );
}

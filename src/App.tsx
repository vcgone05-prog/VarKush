import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Dashboard";
import background from "./assets/images/flower_bg.webp";

export default function App() {
  return (
    <div className="relative min-h-screen">
  {/* Background */}
  {/* Background */}
<img
  src={background}
  alt=""
  className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50"
/>

  {/* White overlay */}
  <div className="absolute inset-0 bg-white/10 -z-10" />

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

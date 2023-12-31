import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Wildlife from "./pages/Wildlife";
import Trekking from "./pages/Trekking";
import Heritage from "./pages/Heritage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/wildlife" element={<Wildlife />} />
        <Route path="/trekking" element={<Trekking />} />
        <Route path="/heritage" element={<Heritage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

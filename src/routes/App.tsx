import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.less"
import Home from "./home/Home";
import PoTree from "./potree/PoTree";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/potree" element={<PoTree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

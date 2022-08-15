import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartUp from "./StartUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartUp />} />
          <Route path="/start-up" element={<StartUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

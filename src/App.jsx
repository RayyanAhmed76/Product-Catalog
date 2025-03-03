import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <div className="w-full h-screen  flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/1" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

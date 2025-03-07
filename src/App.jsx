import React from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import { IoMdHome } from "react-icons/io";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  const { search, pathname } = useLocation();
  console.log(search.length);

  return (
    <div className="w-full h-screen flex relative">
      {((pathname !== "/" && !pathname.startsWith(`/details/`)) ||
        search.length > 0) && (
        <Link
          to="/"
          className="absolute top-4 left-4 md:top-8  md:left-5   p-2   rounded-full"
        >
          <IoMdHome className="w-8 h-8 text-black md:w-10 md:h-10 " />
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;

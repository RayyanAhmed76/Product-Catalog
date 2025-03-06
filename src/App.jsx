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
    <div className="w-full h-screen  flex">
      {((pathname !== "/" && !pathname.startsWith(`/details/`)) ||
        search.length > 0) && (
        <Link
          to="/"
          className="text-black  w-[30px] h-[30px]  absolute left-[18%] top-[3%]"
        >
          <IoMdHome className="border rounded-full w-[30px] h-[30px] " />
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

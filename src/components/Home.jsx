import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Nav />
      <div className="w-[85%]  p-10 flex flex-wrap overflow-x-hidden overflow-y-auto ">
        <Link
          to="/details/1"
          className="card w-[20%] h-[32vh] flex flex-col  justify-center items-center border border-black/10 rounded-lg p-2 shadow-sm "
        >
          <div className="object-cover w-[80%] h-[35vh] mb-1 hover:scale-110 flex justify-center">
            <img
              className="w-[90%] h-[150px] lg:h-[250px]"
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            />
          </div>
          <h1 className="font-semibold whitespace-nowrap">
            Classic Black Electric Bicycle
          </h1>
        </Link>
      </div>
    </>
  );
}

export default Home;

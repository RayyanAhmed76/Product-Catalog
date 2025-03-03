import React from "react";

function Nav() {
  return (
    <nav className="w-[15%] h-full bg-zinc-300 flex flex-col items-center p-10 ">
      <a className="text-xl  px-2 py-1  border rouned" href="/create">
        Add New Product
      </a>
      <hr className="my-5 w-full" />
      <h1 className="text-2xl w-[100%] ">Category Filter</h1>
      <ul className=" mt-5 w-[90%]">
        <li className="mb-3 flex items-center gap-3 ">
          <span className="w-[12px] h-[12px] bg-black rounded-full"></span>
          Cat 1
        </li>

        <li className="mb-3 flex items-center gap-3 ">
          <span className="w-[12px] h-[12px] bg-red-300 rounded-full"></span>
          Cat 1
        </li>

        <li className="mb-3 flex items-center gap-3 ">
          <span className="w-[12px] h-[12px] bg-blue-300 rounded-full"></span>
          Cat 1
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

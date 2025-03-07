import React, { useContext } from "react";
import { contextProduct } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(contextProduct);

  let unique_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  unique_category = [...new Set(unique_category)];

  const color = () => {
    return `rgba(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    },${Math.random() * 255}`;
  };

  return (
    <nav className="w-full md:w-[15%] h-full  bg-zinc-300 flex flex-col md:items-center p-5 md:p-10 ">
      <a
        className="text-xl px-4 py-2 border rounded bg-gray-200 text-center w-full md:w-auto"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="my-5 w-full" />
      <h1 className="text-2xl w-full text-center md:text-left ">
        Category Filter
      </h1>
      <div className="mt-5 w-full flex flex-col md:w-[90%]">
        {unique_category.map((item, index) => (
          <Link
            to={`/?category=${item}`}
            key={index}
            className="mb-3 flex items-center gap-3 px-4 py-2 hover:bg-gray-400 rounded-md w-full md:w-auto"
          >
            <span
              style={{ backgroundColor: color() }}
              className="w-3 h-3 rounded-full"
            ></span>
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;

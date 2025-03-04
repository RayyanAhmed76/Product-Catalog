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
    <nav className="w-[15%] h-full bg-zinc-300 flex flex-col items-center p-10 ">
      <a className="text-xl  px-2 py-1  border rouned" href="/create">
        Add New Product
      </a>
      <hr className="my-5 w-full" />
      <h1 className="text-2xl w-[100%] ">Category Filter</h1>
      <div className=" mt-5 w-[90%]">
        {unique_category.map((item, index) => (
          <Link
            to={`/?category=${item}`}
            key={index}
            className="mb-3 flex items-center gap-3 "
          >
            <span
              style={{ backgroundColor: color() }}
              className="w-[12px] h-[12px] bg-black rounded-full"
            ></span>
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;

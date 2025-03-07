import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { contextProduct } from "../utils/Context";
import Loading from "./Loading";
import instance from "../utils/api";

function Home() {
  const [products] = useContext(contextProduct);
  const { search } = useLocation();

  const [filteredproduct, setfilteredproduct] = useState(null);
  let category = decodeURIComponent(search.split("=")[1]);

  const getproductcategory = async () => {
    try {
      const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

      // Filter products by category
      const filteredProducts = storedProducts.filter(
        (p) => p.category === category
      );

      // Update state with filtered products
      setfilteredproduct(filteredProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredproduct || category == "undefined")
      setfilteredproduct(products);
    if (category != "undefined") getproductcategory();
  }, [category, products]);
  return products ? (
    <>
      <Nav />
      <div className="  w-[85%]  p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-x-hidden overflow-y-auto  mt-8 ">
        {filteredproduct &&
          filteredproduct.map((item, index) => (
            <Link
              key={index}
              to={`/details/${item.id}`}
              className=" h-[25vh] card flex flex-col items-center border border-black/10 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow "
            >
              <div className="w-full  flex justify-center">
                <img
                  className="w-full max-w-[200px] h-[150px] object-contain mb-4"
                  src={item.image}
                />
              </div>
              <h1 className="font-semibold ">{item.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;

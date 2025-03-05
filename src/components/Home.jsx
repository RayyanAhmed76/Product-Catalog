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
      const { data } = await instance.get(`/products/category/${category}`);
      setfilteredproduct(data);
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
      <div className="w-[85%]  p-10 flex flex-wrap overflow-x-hidden overflow-y-auto mt-8  ">
        {filteredproduct &&
          filteredproduct.map((item, index) => (
            <Link
              key={index}
              to={`/details/${item.id}`}
              className="card w-[19%] h-[32vh] flex flex-col  justify-center items-center border border-black/10 rounded-lg p-2 shadow-sm mb-4 mr-2 "
            >
              <div className="object-cover w-[80%] h-[35vh] mb-1 hover:scale-110 flex justify-center">
                <img
                  className="w-[90%] h-[150px] lg:h-[250px]"
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

import React, { createContext, useEffect, useState } from "react";
import instance from "./api";

export const contextProduct = createContext();
function Context(props) {
  const [products, setproducts] = useState(null);

  const getproducts = async () => {
    try {
      const { data } = await instance.get(`/products`);
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <contextProduct.Provider value={[products, setproducts]}>
      {props.children}
    </contextProduct.Provider>
  );
}

export default Context;

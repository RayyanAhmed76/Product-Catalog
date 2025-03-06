import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contextProduct } from "../utils/Context";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setproducts] = useContext(contextProduct);
  const [product, setproduct] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const formhandler = (e) => {
    e.preventDefault();
    if (
      product.title.trim() < 4 ||
      product.category.trim() < 4 ||
      product.price.trim() < 1 ||
      product.description.trim() < 4
    ) {
      alert("All fields must be at least 4 characters long");
      return;
    }
    const pi = products.findIndex((p) => p.id == id);
    const copydata = [...products];
    copydata[pi] = { ...products[pi], ...product };
    setproducts(copydata);
    localStorage.setItem("products", JSON.stringify(copydata));
    navigate(-1);
  };

  const changeHandler = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setproduct(products.filter((product) => product.id == id)[0]);
  }, [id]);

  return (
    <form
      onSubmit={formhandler}
      className="w-screen h-screen  p-[5%] flex flex-col items-center "
    >
      <h1 className="text-2xl  font-semibold mb-3 ">Edit Product</h1>
      <input
        type="url"
        placeholder="Image URL"
        className="pl-2 py-3  text-1xl w-1/2 bg-zinc-200 rounded outline-blue-300 mb-3"
        name="image"
        onChange={changeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="Title"
        className="pl-2 py-2 text-1xl w-1/2 bg-zinc-200 rounded outline-blue-300"
        name="title"
        onChange={changeHandler}
        value={product && product.title}
      />

      <div className="mt-3 w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className=" pl-2 py-2 text-1xl w-[48%] bg-zinc-200 rounded outline-blue-300 mb-3"
          name="category"
          onChange={changeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="Price"
          className="pl-2 py-2 text-1xl w-[48%] bg-zinc-200 rounded outline-blue-300 mb-3"
          name="price"
          onChange={changeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        className="pl-2 py-15 text-1xl w-1/2 bg-zinc-200 rounded outline-blue-300 mb-3"
        placeholder="Product Description"
        cols="30"
        name="description"
        onChange={changeHandler}
        value={product && product.description}
      ></textarea>
      <div className="w-1/2">
        <button
          className="self-start text-1xl  px-2 py-1  border rounded"
          href="/create"
        >
          Edit Product
        </button>
      </div>
    </form>
  );
}

export default Edit;

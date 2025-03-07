import React, { useContext, useState } from "react";
import { contextProduct } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(contextProduct);
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const formhandler = (e) => {
    e.preventDefault();
    if (
      title.trim() < 4 ||
      category.trim() < 4 ||
      price.trim() < 1 ||
      description.trim() < 4
    ) {
      alert("All fields must be at least 4 characters long");
      return;
    }
    const product = {
      id: nanoid(),
      image,
      title,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    toast.success("Product added successfully");
    navigate("/");
  };

  return (
    <form
      onSubmit={formhandler}
      className="w-screen h-screen  p-[5%] flex flex-col items-center "
    >
      <h1 className="text-2xl  font-semibold mb-3 ">Add New Product</h1>
      <input
        type="url"
        placeholder="Image URL"
        className="pl-2 py-3  text-1xl w-1/2 bg-zinc-200 rounded outline-blue-300 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="pl-2 py-2 text-1xl w-1/2 bg-zinc-200 rounded outline-blue-300"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <div className="mt-3 w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className=" pl-2 py-2 text-1xl w-[48%] bg-zinc-200 rounded outline-blue-300 mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="pl-2 py-2 text-1xl w-[48%] bg-zinc-200 rounded outline-blue-300 mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="pl-2 py-15 text-1xl w-1/2 bg-zinc-200 rounded outline-blue-300 mb-3"
        placeholder="Product Description"
        cols="30"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>
      <div className="w-1/2">
        <button
          className="self-start text-1xl  px-2 py-1  border rounded"
          href="/create"
        >
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;

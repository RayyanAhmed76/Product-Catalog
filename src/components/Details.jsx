import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { contextProduct } from "../utils/Context";
import { useContext, useEffect, useState } from "react";
import instance from "../utils/api";
import Loading from "./Loading";
function Details() {
  const [products, setproducts] = useContext(contextProduct);
  const [product, setproduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const deletedatahandler = (id) => {
    const filtereddata = products.filter((p) => p.id !== id);
    setproducts(filtereddata);
    localStorage.setItem("products", JSON.stringify(filtereddata));
    navigate("/");
  };

  /*const getsingledata = async () => {
    try {
      const { data } = await instance.get(`/products/${id}`);
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };*/

  useEffect(() => {
    console.log("this is id: " + id, products.id);
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
    //getsingledata();
  }, []);

  console.log(product);
  return product ? (
    <>
      <div className="relative w-full h-screen">
        <Link className="absolute top-10 left-10 text-5xl text-black">
          <IoArrowBackCircleOutline onClick={() => navigate(-1)} />
        </Link>

        <div className="w-[70%] h-full m-auto flex  justify-between items-center">
          <div className=" w-[40%]  object-cover p-5 ">
            <img src={product.image} alt="" />
          </div>
          <div className="w-[50%] h-[40%]">
            <h2 className="text-4xl whitespace-nowwrap">{product.title}</h2>
            <h2 className="text-lg opacity-50  mt-6">{product.category}</h2>
            <h2 className="mt-4 text-red-400">$ {product.price}</h2>
            <p className="mt-5 mb-5">{product.description}</p>
            <Link
              to={`/edit/${product.id}`}
              className="px-6 py-1 text-red-300 border mr-5"
            >
              Edit
            </Link>
            <button
              onClick={() => deletedatahandler(product.id)}
              className="px-6 py-1 text-blue-300 border"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Details;

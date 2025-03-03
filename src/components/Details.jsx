import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
function Details() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative w-full h-screen">
        <Link className="absolute top-10 left-10 text-5xl text-black">
          <IoArrowBackCircleOutline onClick={() => navigate(-1)} />
        </Link>

        <div className="w-[70%] h-full m-auto flex  justify-between items-center">
          <div className=" w-[40%]  object-cover p-5 ">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt=""
            />
          </div>
          <div className="w-[50%] h-[40%]">
            <h2 className="text-4xl whitespace-nowwrap">
              Classic Black Electric Bicycle
            </h2>
            <h2 className="text-lg opacity-50  mt-6">Vehical</h2>
            <h2 className="mt-4 text-red-400">$ 509.99</h2>
            <p className="mt-5 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem debitis perspiciatis facere, ipsum corporis alias eum
              delectus id asperiores assumenda aliquam, ducimus veniam nemo
              enim.
            </p>
            <Link className="px-6 py-1 text-red-300 border mr-5">Edit</Link>
            <Link className="px-6 py-1 text-blue-300 border">Delete</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;

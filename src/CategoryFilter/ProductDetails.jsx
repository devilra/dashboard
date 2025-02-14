import React from "react";
import { GiHook } from "react-icons/gi";
import { Link, useLocation, useParams } from "react-router-dom";

// notes: Product details page la entha product click pannunalum Link la use location Hook
//  use panni link tag la state prop la antha data anupanum

const ProductDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const { name, price, image, category } = state.product;

  if (!state?.product) {
    return (
      <div className=" h-screen flex flex-col justify-center items-center  mt-10">
        <p className="text-5xl font-bold">Product Not Found</p>
        <Link
          className="bg-neutral-200 font-bold text-blue-500 hover:bg-slate-200 px-10 my-5 py-2 rounded-md"
          to="/category"
        >
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-20">
      <h1 className="text-black  text-4xl font-bold text-center my-10">
        Products Details
      </h1>
      <div className="px-5 flex flex-col justify-center items-center">
        <img
          src={image}
          className="h-[500px] w-3/4 rounded-md border-[2px] border-purple-700 p-1"
        />
      </div>
    </div>
  );
};

export default ProductDetails;

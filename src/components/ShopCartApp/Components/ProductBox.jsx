import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/slices/cartSlice";

function ProductBox({ data }) {
  const dispatch = useDispatch();
  function addItem() {
    dispatch(addToCart(data));
  }
  const rateColor =
    data.rating.rate < 3
      ? "bg-red-600"
      : data.rating.rate < 4
      ? "bg-orange-600"
      : "bg-green-600";
  return (
    <div className="relative group flex flex-col gap-2.5 mx-5 my-5 max-h-[400px] items-center border-2 border-black rounded-2xl overflow-hidden bg-white shadow-gray-800 shadow-md">
      <div className="h-[160px] p-5">
        <img
          className="h-full w-full object-cover"
          src={data.image}
          alt="image"
        />
      </div>
      <div className=" flex flex-col justify-between gap-2 p-2 bg-blue-900 text-white text-md w-full h-full">
        <span>{data.title}</span>
        <button
          onClick={addItem}
          className="bg-black text-white p-3 rounded-lg">
          Add to cart
        </button>
        <span
          className={`absolute top-2 right-2 text-white rounded-xl p-2 text-md
          ${rateColor}`}>
          {data.rating.rate}
        </span>
        <span className="absolute top-2 left-2 text-black rounded-xl p-2 text-md bg-gray-200 text-md">
          ${data.price}
        </span>
      </div>
    </div>
  );
}

export default ProductBox;

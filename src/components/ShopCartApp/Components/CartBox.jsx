import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Store/slices/cartSlice";
function CartBox({ data }) {
  const dispatch = useDispatch();
  function removeItem() {
    dispatch(removeFromCart(data));
  }
  return (
    <div className="relative group flex flex-col gap-2.5 mx-5 my-5 max-h-[235px] items-center border-2 border-black rounded-2xl overflow-hidden bg-white shadow-gray-800 shadow-md">
      <div className="h-[160px] p-5">
        <img
          className="h-full w-full object-cover"
          src={data.image}
          alt="image"
        />
      </div>
      <div className=" flex flex-col justify-between gap-2 p-2 bg-gray-600 text-white text-md w-full h-full">
        <button
          onClick={removeItem}
          className="bg-black text-white p-3 rounded-lg">
          Remove From cart
        </button>
      </div>
    </div>
  );
}

export default CartBox;

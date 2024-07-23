import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { RecipeContext } from "../Context/Context";
import { useContext } from "react";
function FavItem({ item }) {
  const { removeFav } = useContext(RecipeContext);
  return (
    <div className="flex flex-col overflow-hidden w-80 p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white justify-between">
      <button
        onClick={() => {
          removeFav(item);
        }}
        className="p-2 rounded-full bg-red-600 text-white shadow-md text-center text-xl">
        <span className="inline-block m-auto">Remove</span>
      </button>
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item.image_url} alt="image" className="block w-full" />
      </div>
      <span className="text-lg text-cyan-800 font-medium text-center">
        {item.publisher}
      </span>
      <h3 className="text-center text-black">{item.title}</h3>
      <span className="flex justify-between items-center gap-2">
        <FaHeart className="text-red-600 text-4xl" />
        <Link
          to={`/item/${item.id}`}
          className="p-3 text-sm px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white text-center">
          See details
        </Link>
      </span>
    </div>
  );
}

export default FavItem;

import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="flex flex-col overflow-hidden w-80 p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white justify-between">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item.image_url} alt="image" className="block w-full" />
      </div>
      <span className="text-lg text-cyan-800 font-medium text-center">
        {item.publisher}
      </span>
      <h3 className="text-center text-black">{item.title}</h3>
      <Link
        to={`/item/${item.id}`}
        className="p-3 text-sm px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white text-center">
        See details
      </Link>
    </div>
  );
}

export default Item;

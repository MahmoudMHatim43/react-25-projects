import React from "react";
import { Link } from "react-router-dom";

function CartNavbar() {
  return (
    <div className="bg-gray-300">
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto bg-slate-600">
        <Link to={"/"}>
          <div className="ml-5 font-bold text-white sm:text-2xl md:text-3xl cursor-pointer">
            <h1>Redux Shop App</h1>
          </div>
        </Link>
        <ul className="flex items-center justify-between space-x-10 mr-10 text-white sm:text-2xl md:text-xl font-semibold">
          <Link to={"/"}>
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li className="hover:text-orange-500 cursor-pointer">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default CartNavbar;

import React from "react";
import { NavLink } from "react-router-dom";
import { RecipeContext } from "../Context/Context";

function Navbar() {
  const { search, setSearch, handleSubmit } = React.useContext(RecipeContext);
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        {" "}
        <NavLink
          className="text-black hover:text-gray-700 duration-300"
          to={"/"}>
          Food Recipes
        </NavLink>
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <input
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          name="search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            className="text-black hover:text-gray-700 duration-300"
            to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-black hover:text-gray-700 duration-300"
            to={"/favourites"}>
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

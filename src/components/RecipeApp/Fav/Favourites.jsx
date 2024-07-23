import React from "react";
import FavItem from "./FavItem";
import { RecipeContext } from "../Context/Context";
function Favourites() {
  const { favourites } = React.useContext(RecipeContext);
  return (
    <div className="py-8 contianer mx-auto flex flex-wrap justify-center gap-10">
      {favourites && favourites.length > 0 ? (
        favourites.map((item) => {
          return <FavItem item={item} key={item.id} />;
        })
      ) : (
        <h1 className="lg:text-4xl text-xl text-center text-black font-extrabold">
          No Likes Yet! 😊
        </h1>
      )}
    </div>
  );
}

export default Favourites;

import React from "react";
import { RecipeContext } from "../Context/Context";
import Item from "./Item";
function Home() {
  const { load, err, data } = React.useContext(RecipeContext);
  return (
    <div className="py-8 contianer mx-auto flex flex-wrap justify-center gap-10">
      {data && data.length > 0 ? (
        data.map((item) => {
          return <Item item={item} key={item.id} />;
        })
      ) : load ? (
        <h1>Loading...</h1>
      ) : err ? (
        <h1>Error:{err}</h1>
      ) : (
        <h1 className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing to show here try searching for any kind of recipes 😊
        </h1>
      )}
    </div>
  );
}

export default Home;

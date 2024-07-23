import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../Context/Context";
import Image from "./Image";
import List from "./List";
function Details() {
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails } = useContext(RecipeContext);
  async function getDetails() {
    try {
      setLoad(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      if (data && data.data) {
        setRecipeDetails(data.data);
      }
      setLoad(false);
    } catch (error) {
      console.log(error.message);
      setErr(error.message);
      setLoad(false);
    }
  }
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {load ? (
        <h1>Loading...</h1>
      ) : err ? (
        <h1>Error:{err}</h1>
      ) : recipeDetails ? (
        <>
          <Image data={recipeDetails.recipe} />
          <List data={recipeDetails.recipe} />
        </>
      ) : null}
    </div>
  );
}

export default Details;

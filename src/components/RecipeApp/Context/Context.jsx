import { createContext, useState } from "react";
// 1- create a context
export const RecipeContext = createContext(null);
// 2- create Provider
export function GlobalRecipeState({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);
  async function handleSubmit() {
    const APIKEY = "dba31173-f4a9-453c-8880-556f78035882";
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=${APIKEY}`
      );
      const result = await response.json();
      setData(result.data.recipes || null);
      setSearch("");
      setLoading(false);
    } catch (error) {
      setErr(error.message);
      console.log(error);
      setSearch("");
      setLoading(false);
    }
  }
  return (
    <RecipeContext.Provider
      value={{
        search,
        setSearch,
        loading,
        setLoading,
        handleSubmit,
        data,
        err,
        recipeDetails,
        setRecipeDetails,
      }}>
      {children}
    </RecipeContext.Provider>
  );
}

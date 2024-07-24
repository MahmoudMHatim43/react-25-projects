import React from "react";
import { Circles } from "react-loader-spinner";
import ProductBox from "../Components/ProductBox";

function CartHome() {
  const [products, setProducts] = React.useState(null);
  const [pend, setPend] = React.useState(false);
  const [err, setErr] = React.useState(null);
  React.useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    try {
      setPend(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (data && data.length > 0) {
        setProducts(data);
        setPend(false);
      }
    } catch (error) {
      console.log(error.message);
      setErr(error.message);
      setPend(false);
      throw new Error(error);
    }
  }
  return (
    <div className="bg-gray-300 overflow-hidden min-h-screen w-full">
      {pend ? (
        <div className="flex flex-col justify-center items-center w-full min-h-screen">
          <Circles height={"120"} width={"120"} color="#007bff" />
          <h1>Loading</h1>
        </div>
      ) : err ? (
        <h1>Error Loading Data!</h1>
      ) : products && products.length ? (
        <div className="min-h-screen grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products.map((item) => (
            <ProductBox key={item.id} data={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CartHome;

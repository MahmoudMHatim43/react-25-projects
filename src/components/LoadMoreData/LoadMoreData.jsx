import { useEffect, useState } from "react";
import "./load-more-data.css";
function LoadMoreData({ url }) {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  console.log(items);
  useEffect(() => {
    getProducts(url);
  }, [count]);
  // fetch products function:
  async function getProducts(url) {
    // the API url => "https://dummyjson.com/products?limit=100"
    try {
      setLoading(true);
      const promise = await fetch(url + `skip=${count === 0 ? 0 : count * 15}`);
      const result = await promise.json();
      setItems((prevItems) => [...prevItems, ...result.products]);
      setTotal(result.total);
      setLoading(false);
    } catch (err) {
      setErrorMessage(err.message);
      console.log(`Error: ${err}`);
      setLoading(false);
    }
  }

  if (loading && items.length == 0) {
    return <h1>Loading...</h1>;
  }
  if (errorMessage !== null) {
    return <h1>Error Occurd : ${errorMessage}</h1>;
  }
  return (
    <>
      <div className="products-container">
        {items.map((item) => (
          <div className="item-container" key={item.id}>
            <img src={`${item.images[0]}`} alt={`${item.title}`} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      {items.length < total ? (
        <button
          className="load-more-btn"
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          Load More
        </button>
      ) : (
        <></>
      )}
    </>
  );
}

export default LoadMoreData;

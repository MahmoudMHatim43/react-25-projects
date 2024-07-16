import { useFetch, useOnClickOutside } from ".";
import { useRef, useState } from "react";
import "./test.css";
export function UseFetchHookTest() {
  const { data, pending, errMsg } = useFetch("https://dummyjson.com/products", {});
  //   console.log(data.products); why this cause err while line 13 doesn't ? data is initially set to null an I was trying to access it
  return (
    <div className="test-fetch-custom-hook-container">
      <h2>
        The <em style={{ color: "orange" }}>useFetch</em> Custom Hooks
      </h2>
      {pending ? (
        <h3>Pending... Please Wait</h3>
      ) : errMsg !== null ? (
        <h2>Error: {errMsg}</h2>
      ) : data && data.products && data.products.length ? (
        data.products.map((item) => <p key={item.id}>{item.title}</p>)
      ) : null}
    </div>
  );
}
export function ClickOutsideHookTest() {
  const [show, setShow] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => {
    console.log("GOD!");
    setShow(false);
  });

  return (
    <div className="test-click-handle-custom-hook-container">
      {show ? (
        <div ref={ref}>
          <h1>This is a Modal</h1>
          <p>Click outside this content border to close it, If you click inside it won't close</p>
        </div>
      ) : (
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Click to Show content
        </button>
      )}
    </div>
  );
}

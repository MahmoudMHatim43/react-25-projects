import React, { useRef } from "react";
import { useFetch } from "../CustomHooks";
function ScrollJump() {
  const { data, pending, errMsg } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const refbottom = useRef();
  const refTop = useRef();
  function handleMove(action) {
    action === "down"
      ? refbottom.current.scrollIntoView({ behavior: "smooth" })
      : refTop.current.scrollIntoView({ behavior: "smooth" });
  } // window.scrollTop({top:ref.current.getBoundingClientRect().top, left:0, behavior:'smooth'})

  return pending ? (
    <h1>Pending...</h1>
  ) : errMsg ? (
    <h1>{errMsg}</h1>
  ) : (
    <div>
      <h1>Scroll To Top/Bottom</h1>
      <button ref={refTop} onClick={() => handleMove("down")}>
        Scroll Bottom
      </button>
      {data && data.products
        ? data.products.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })
        : null}
      <button ref={refbottom} onClick={() => handleMove("up")}>
        Scroll Top
      </button>
    </div>
  );
}

export default ScrollJump;

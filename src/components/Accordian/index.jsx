import { Data } from "./Data";
import { useState } from "react";
import "./index.css";

export default function Accordian() {
  const [select, setSelect] = useState(null);
  const [multi, setmulti] = useState([]);
  const [mode, setmode] = useState(false);

  function handleClick(id) {
    mode
      ? multi.includes(id)
        ? setmulti(multi.filter((element) => element !== id))
        : setmulti([...multi, id])
      : setmulti([]);
    id === select ? setSelect(null) : setSelect(id);
  }

  return (
    <>
      <button onClick={() => setmode(!mode)}>Enable Multi Select</button>
      {Data && Data.length > 0 ? (
        Data.map((item) => {
          return (
            <div className="acc-container" onClick={() => handleClick(item.id)}>
              <h2>{item.title}</h2>
              {select == item.id || multi.includes(item.id) ? (
                <p>{item.content}</p>
              ) : (
                <></>
              )}
            </div>
          );
        })
      ) : (
        <div>No Data Available!</div>
      )}
    </>
  );
}

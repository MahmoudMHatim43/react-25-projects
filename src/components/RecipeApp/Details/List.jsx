import React from "react";

function List({ data }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-lg text-cyan-800 font-medium text-center">
        {data.publisher}
      </span>
      <h3 className="text-center text-black">{data.title}</h3>
      <div>
        <button className="p-3 text-sm px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white">
          Save As 💝
        </button>
      </div>
      <div>
        <span className="text-2xl font-semibold text-black">
          <ul className="flex flex-col gap-3">
            {data.ingredients.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    index === data.ingredients.length - 1
                      ? ""
                      : "border-b-2 border-gray-200"
                  }>
                  <span className="block text-xl font-semibold text-black mt-2">
                    {item.description}
                  </span>
                  <span className="block text-base font-medium text-gray-600 p-2">
                    {item.unit} {item.quantity}
                  </span>
                </li>
              );
            })}
          </ul>
        </span>
      </div>
    </div>
  );
}

export default List;

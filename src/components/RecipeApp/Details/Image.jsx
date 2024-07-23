import React from "react";

function Image({ data }) {
  return (
    <div className="row-start-2 lg:row-start-auto">
      <div className="h-96 overflow-hidden rounded-xl group">
        <img
          src={data.image_url}
          alt="image"
          className="w-full h-full object-cover block group-hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
}

export default Image;

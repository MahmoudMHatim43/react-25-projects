import "./star-rating.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ stars = 5 }) {
  const [rating, setRating] = useState(0);
  const [done, setdone] = useState(false);
  function rate(index) {
    setRating(index);
  }
  return (
    <>
      <h1>Rate Us</h1>
      <div className="stars-container">
        {[...Array(stars)].map((star, index) => (
          <FaStar
            key={index}
            onMouseEnter={() => (done ? "" : rate(index + 1))}
            onMouseLeave={() => (done ? "" : rate(0))}
            onClick={() => {
              rate(index + 1);
              setdone(!done);
            }}
            className={rating > index ? "yellow-star" : ""}
          />
        ))}
      </div>
    </>
  );
}

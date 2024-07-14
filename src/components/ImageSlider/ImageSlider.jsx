import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./image-slider.css";
import { SiNuke } from "react-icons/si";
export default function ImageSlider({ url, limit }) {
  // hooks:

  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    if (url !== "") getImages(url, limit);
  }, [url]); // when the url change fetch data again

  // fecth the images function:
  async function getImages(url, limit) {
    try {
      setLoading(true);
      const promise = await fetch(url + limit);
      const data = await promise.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.message);
    }
  }
  // slide function:
  function slideImage(direction, slide) {
    const slider = document.querySelector(".images");
    switch (direction) {
      case "right":
        slide == 9 ? (slider.style.left = `0%`) : (slider.style.left = `-${(slide + 1) * 100}%`);
        slide == 9 ? setSlide(0) : setSlide((prevSlide) => prevSlide + 1);
        break;
      case "left":
        slide == 0
          ? (slider.style.left = `-${(images.length - 1) * 100}%`)
          : (slider.style.left = `-${(slide - 1) * 100}%`);
        slide == 0 ? setSlide(images.length - 1) : setSlide((prevSlide) => prevSlide - 1);
        break;
    }
  }
  // return cases:
  if (loading) {
    return <h1>Loading..</h1>;
  }
  if (errorMessage !== null) {
    return (
      <div>
        <h1>Error Occurd:</h1>${errorMessage}
      </div>
    );
  }
  return (
    <div className="container">
      <button
        className="right"
        onClick={() => {
          slideImage("right", slide);
        }}
      >
        <FaArrowAltCircleRight />
      </button>
      <div className="images">
        {images.map((image) => {
          return <div style={{ backgroundImage: `url(${image.download_url})` }} key={image.id}></div>;
        })}
      </div>
      <button
        className="left"
        onClick={() => {
          slideImage("left", slide);
        }}
      >
        <FaArrowAltCircleLeft />
      </button>
    </div>
  );
}

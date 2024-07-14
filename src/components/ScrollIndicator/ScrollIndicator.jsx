import { useEffect, useState } from "react";
import "./scroll-indicator.css";

const ScrollIndicator = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [errMeassage, setErrMessage] = useState(null);
  const [data, setData] = useState([]);
  const [precent, setPrecent] = useState(0);
  async function getList(theUrl) {
    try {
      setLoading(true);
      const promise = await fetch(theUrl);
      const result = await promise.json();
      setData(result.products);
      setLoading(false);
    } catch (err) {
      setErrMessage(err.message);
      console.log(errMeassage);
      setLoading(false);
    }
  }
  function handleScrollPrecent() {
    const precent =
      (document.documentElement.scrollTop || document.body.scrollTop) /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    setPrecent(precent * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPrecent);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  useEffect(() => {
    getList(url);
  }, [url]);

  // return cases:
  if (loading) {
    return <h1>Loading...</h1>;
  } else if (errMeassage !== null) {
    return (
      <h1>
        Error:<small>${errMeassage}</small>
      </h1>
    );
  }
  return (
    <div className="scroll-indicator-container">
      <div className="the-scroll-indicator" style={{ width: `${precent}%` }}></div>
      <h1>Scroll Indicator: Scroll Down To See The Line Run</h1>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default ScrollIndicator;

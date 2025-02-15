import { useEffect, useLayoutEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
  const [pending, setPending] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, [url]); // At mount and when the url change
  async function getData() {
    try {
      setPending(true);
      const respond = await fetch(url, { ...options });
      const result = await respond.json();
      setData(result);
      setErrMsg(null);
      setPending(false);
    } catch (err) {
      console.log(err.message);
      setErrMsg(err.message);
      setPending(false);
      throw new Error(err);
    }
  }
  return { data, errMsg, pending };
};
export const useOnClickOutside = (refrence, handler) => {
  function listener(event) {
    if (!refrence.current || refrence.current.contains(event.target)) {
      return;
    } else {
      handler();
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", listener); // desktop
    document.addEventListener("touchstart", listener); // mobile
    return () => {
      // remove event listeners when this component will unmount
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refrence, handler]);
};
export const useWindowResize = () => {
  const [size, setSize] = useState({ w: 0, h: 0 });

  function handleResize() {
    setSize({ w: window.innerWidth, h: window.innerHeight });
  }

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    console.log(size);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
};

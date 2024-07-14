import { useEffect, useState } from "react";
const useLocalStorage = (key, defaultValue) => {
  // defaultValue will be passed as a prop
  const [value, setValue] = useState(() => {
    let curr;
    try {
      curr = JSON.parse(localStorage.getItem(key) || String(defaultValue)); // get from local storage
    } catch (err) {
      console.log(err);
      curr = defaultValue;
    }
    return curr;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); // set on local storage
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;

import { useEffect, useState } from "react";
const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let curr;
    try {
      curr = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (err) {
      console.log(err.message);
      curr = defaultValue;
    }
    return curr;
  });
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;

import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [isDarkMode, setDarkMode] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (newValue) => {
    setDarkMode(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [isDarkMode, setValue];
};
export default useLocalStorage;

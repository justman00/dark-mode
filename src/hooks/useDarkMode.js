import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue) => {
  const [isDarkMode, setDarkMode] = useLocalStorage(key, initialValue);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  return [isDarkMode, setDarkMode, toggleDarkMode];
};
export default useDarkMode;

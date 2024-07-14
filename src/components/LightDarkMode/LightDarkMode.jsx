import useLocalStorage from "./UseLocalStorage";
import "./light-dark-mode.css";
const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  return (
    <div className="light-dark-mode-container" data-theme={theme}>
      <h1>Theme Changer</h1>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          console.log(theme);
        }}
      >
        Click To Switch
      </button>
    </div>
  );
};

export default LightDarkMode;

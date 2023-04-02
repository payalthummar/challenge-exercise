import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { toggleTheme, isLightTheme } = useTheme();
  return (
    <span onClick={toggleTheme} style={{ cursor: "pointer" }}>
      {isLightTheme ? (
        <i onClick={toggleTheme} className="fas fa-toggle-on fa-lg "></i>
      ) : (
        <i onClick={toggleTheme} className="fas fa-toggle-off">
          🌜
        </i>
      )}
    </span>
  );
}

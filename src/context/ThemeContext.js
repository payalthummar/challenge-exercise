import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [light, setLight] = useState({ text: "#000", bg: "#eee" });
  const [dark, setDark] = useState({ text: "#eee", bg: "#000" });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };
  const themeStyles = isLightTheme ? light : dark;
  return (
    <>
      <ThemeContext.Provider
        value={{ isLightTheme, light, dark, toggleTheme, themeStyles }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
}
export const useTheme = () => {
  return useContext(ThemeContext);
};

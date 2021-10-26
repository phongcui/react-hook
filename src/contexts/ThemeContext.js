import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  //State

  const [theme, settheme] = useState({
    isLightTheme: false,
    light: {
      background: "rgb(240,240,240)",
      color: "black",
    },
    dark: {
      background: "rgb(39,39,39)",
      color: "red",
    },
  });

  const toggleTheme = () => {
    settheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };

  // Context data
  const themeContextData = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  // Return provider
  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;

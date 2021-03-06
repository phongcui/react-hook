import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../App.css";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;

  const style = isLightTheme ? light : dark;

  return (
    <div className="navbar" style={style}>
      <h1>My Hooks App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <button></button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

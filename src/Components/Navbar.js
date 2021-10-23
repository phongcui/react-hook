import React from "react";
import "../App.css";

const Navbar = () => {
  const style = {
    backgound: "rgb(240,240,240)",
    color: "black",
  };

  return (
    <div className="navbar">
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

import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <header>
      <img
        className="oldagram-logo"
        src="oldagram-logo.png"
        alt="Oldagram logo"
      />
      <img className="avatar" src="avatar.png" alt="My avatar" />
    </header>
  );
};

export default Navbar;

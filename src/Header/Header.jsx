import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2 style={{color : "purple"}}>RS</h2>
      <nav>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/friend'>Friend</Link>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import "./Header.css";
import NavBar from "../Navbar/NavBar";
import Search from "../SearchBar/Search";

function Header() {
  return (
    <div className="head-content">
      <div className="header">
        <NavBar />
        <Search />
      </div>
    </div>
  );
}

export default Header;

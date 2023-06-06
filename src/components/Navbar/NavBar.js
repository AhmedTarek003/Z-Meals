import React from "react";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "../SideBar/SideBar";
import { useDispatch } from "react-redux";
import { turnSideBarOn } from "../../rtk/slices/sidebarSlice";
import { Link } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  return (
    <div className="nav-bar">
      <div className="nav-info">
        <Link to={"/"}>
          <div className="logo">Z Meals</div>
        </Link>
        <div className="menu" onClick={() => dispatch(turnSideBarOn())}>
          <GiHamburgerMenu className="menu-icons" />
        </div>
      </div>
      <SideBar />
    </div>
  );
}

export default NavBar;

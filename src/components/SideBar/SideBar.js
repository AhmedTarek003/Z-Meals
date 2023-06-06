import React, { useEffect } from "react";
import "./SideBar.css";
import { useDispatch, useSelector } from "react-redux";
import { turnSide, turnSideBarOff } from "../../rtk/slices/sidebarSlice";
import { AiOutlineClose } from "react-icons/ai";
import {
  themeMood,
  turnDarkMoodOff,
  turnDarkMoodOn,
} from "../../rtk/slices/darkmoodSlice";
import {
  categoryProducts,
  fetchCategory,
} from "../../rtk/slices/categorySlice";
import { Link } from "react-router-dom";

function SideBar() {
  const sidebar = useSelector(turnSide);
  const theme = useSelector(themeMood);
  const dispatch = useDispatch();

  const category = useSelector(categoryProducts);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className={sidebar ? "sidebar On" : "sidebar"}>
      <div className="close-menu" onClick={() => dispatch(turnSideBarOff())}>
        <AiOutlineClose className="close-icon" />
      </div>
      <div className="mood">
        <div
          className="field"
          onClick={() =>
            theme ? dispatch(turnDarkMoodOff()) : dispatch(turnDarkMoodOn())
          }
        >
          <span className="ball"></span>
        </div>
        <div className="theme-name">Dark Mood</div>
      </div>
      <div className="links">
        {category &&
          category.map((cate) => {
            return (
              <Link
                key={cate.idCategory}
                className="link"
                to={`/category/${cate.strCategory}`}
                onClick={() => dispatch(turnSideBarOff())}
              >
                <li className="li-link">{cate.strCategory}</li>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default SideBar;

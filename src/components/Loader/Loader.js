import React from "react";
import "./Loader.css";
import Loadeing from "../../assets/loader2.svg";
function Loader() {
  return (
    <div className="loader">
      <img className="load-img" src={Loadeing} alt="" />
    </div>
  );
}

export default Loader;

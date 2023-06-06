import React from "react";
import "./Homepage.css";
import Category from "../../components/Category/Category";

function HomePage() {
  return (
    <div className="main-contaent">
      <div className="container">
        <Category />
      </div>
    </div>
  );
}

export default HomePage;

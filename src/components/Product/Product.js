import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
function Product({ category }) {
  return (
    <Link to={`/category/${category.strCategory}`}>
      <div className="image">
        <img className="food-img" src={category.strCategoryThumb} alt="" />
        <div className="cate-name">{category.strCategory}</div>
      </div>
    </Link>
  );
}

export default Product;

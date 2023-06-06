import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import { Col } from "react-bootstrap";
function ProductList({ category }) {
  return (
    <div className="productList">
      {category &&
        category.map((cateProduct) => {
          return (
            <Col lg="2" sm="5" className="cate" key={cateProduct.idCategory}>
              <Product category={cateProduct} />
            </Col>
          );
        })}
    </div>
  );
}

export default ProductList;

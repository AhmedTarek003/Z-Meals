import React, { useEffect } from "react";
import "./Category.css";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryProducts,
  categoryStatus,
  fetchCategory,
} from "../../rtk/slices/categorySlice";
import { STATUS } from "../../utils/status";
import Loader from "../Loader/Loader";
import ProductList from "../ProductList/ProductList";

function Category() {
  const category = useSelector(categoryProducts);
  const categorystatus = useSelector(categoryStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className="category">
      <div className="title">Category</div>

      {categorystatus === STATUS.LOADING ? (
        <Loader />
      ) : (
        <ProductList category={category} />
      )}
    </div>
  );
}

export default Category;

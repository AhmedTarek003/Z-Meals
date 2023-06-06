import React, { useEffect } from "react";
import "./CategoryPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMeals,
  mealsProductStatus,
  mealsProducts,
} from "../../rtk/slices/mealsSlice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import MealsList from "../../components/MealsList/MealsList";
function CategoryPage() {
  const { cate } = useParams();
  const meals = useSelector(mealsProducts);
  const mealStatus = useSelector(mealsProductStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeals(cate));
  }, [dispatch, cate]);

  console.log();

  if (meals === null) {
    return (
      <div className="meals">
        <div className="container">
          <div className="title">Meals</div>
          <p className="notFound">No {cate} Meals Found</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="meals">
        <div className="container">
          <div className="title">Meals</div>

          {mealStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <MealsList meals={meals} />
          )}
        </div>
      </div>
    );
  }
}

export default CategoryPage;

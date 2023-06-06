import React, { Fragment, useEffect } from "react";
import "./Searchpage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals, mealsProducts } from "../../rtk/slices/mealsSlice";
import { Col } from "react-bootstrap";
import Category from "../../components/Category/Category";

function SearchPage() {
  const { search } = useParams();
  const searchProduct = useSelector(mealsProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals(search));
  }, [dispatch, search]);

  if (searchProduct === null) {
    return (
      <Fragment>
        <p className="no-food">No Any Food Found...</p>
        <div className="main-contaent">
          <div className="container">
            <Category />
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="search-product">
          <div className="container">
            <div className="content">
              <div className="title">Meals</div>
              <div className="mealsList">
                {searchProduct &&
                  searchProduct.map((meal) => {
                    return (
                      <Col lg="2" sm="5" className="meal" key={meal.idMeal}>
                        <div className="meal-image">
                          <img src={meal.strMealThumb} alt="" />
                        </div>
                        <div className="meal-name">{meal.strMeal}</div>
                        <div className="category-name">{meal.strCategory}</div>
                      </Col>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="main-contaent">
          <div className="container">
            <Category />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchPage;

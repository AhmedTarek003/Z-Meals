import React from "react";
import "./MealsList.css";
import { Col } from "react-bootstrap";
function MealsList({ meals }) {
  return (
    <div className="mealsList">
      {meals &&
        meals.map((meal) => {
          return (
            <Col lg="2" sm="5" className="meal" key={meal.idMeal}>
              <div className="meal-image">
                <img src={meal.strMealThumb} alt="" />
              </div>
              <div className="meal-name">{meal.strMeal}</div>
            </Col>
          );
        })}
    </div>
  );
}

export default MealsList;

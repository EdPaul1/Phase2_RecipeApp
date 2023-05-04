import React from 'react';
import './RecipeSearch.css';
import './MealList.css'

function MealList({ category, meals, onCloseClick }) {
  return (
    <div>
      <h3 className="category-header">{category}</h3>
      <button className="close-button" onClick={onCloseClick}>Close</button>
      <div className="container">
        <ul>
          {meals ? (
            meals.map(meal => (
              <li key={meal.idMeal}>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <a href="#" className="recipe-btn">Get Recipe</a>
              </li>
            ))
          ) : (
            <li>
              <p>No results found</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MealList;

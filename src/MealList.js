import React from 'react';

function MealList({ category, meals }) {
  return (
    <div>
      <h2 className="category-header">{category}</h2>
      <div className="meal-list">
        {meals.map(meal => (
          <div key={meal.idMeal} className="meal-item">
            <h3 className="meal-title">{meal.strMeal}</h3>
            <img className="meal-image" src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealList;

import React, { useState } from 'react';
import './RecipeSearch.css';
import './MealList.css';

function MealList({ category, meals, onCloseClick }) {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleGetRecipe = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((data) => setSelectedMeal(data.meals[0]))
      .catch((error) => console.error(error));
  };

  const handleCloseRecipe = () => {
    setSelectedMeal(null);
  };

  return (
    <div>
      {selectedMeal ? (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseRecipe}>
              &times;
            </button>
            <h2>{selectedMeal.strMeal}</h2>
            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
            <h3>Ingredients:</h3>
            <ul>
              {Object.keys(selectedMeal)
                .filter((key) => key.startsWith('strIngredient') && selectedMeal[key])
                .map((key) => (
                  <li key={key}>
                    {selectedMeal[key]} - {selectedMeal[`strMeasure${key.slice(13)}`]}
                  </li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{selectedMeal.strInstructions}</p>
          </div>
        </div>
      ) : (
        <>
          <h3 className="category-header">{category}</h3>
          <button className="close-button" onClick={onCloseClick}>Close</button>
          <div className="container">
            <ul>
              {meals ? (
                meals.map(meal => (
                  <li key={meal.idMeal}>
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <a href="#" className="recipe-btn" onClick={() => handleGetRecipe(meal.idMeal)}>Get Recipe</a>
                  </li>
                ))
              ) : (
                <li>
                  <p>No results found</p>
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default MealList;

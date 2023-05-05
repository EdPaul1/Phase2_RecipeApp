import React, { useState } from "react";
import "./RecipeSearch.css";
import FavoriteButton from './FavoriteButton';

function RecipeSearch() {
  const [meals, setMeals] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");
  const [searchType, setSearchType] = useState("ingredient");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = () => {
    let searchApi = "";
    if (searchType === "ingredient") {
      searchApi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInputText}`;
    } else if (searchType === "meal") {
      searchApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`;
    }

    fetch(searchApi)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.error(error));
  };

  const handleGetRecipe = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((data) => setSelectedMeal(data.meals[0]))
      .catch((error) => console.error(error));
  };

  const handleCloseRecipe = () => {
    setSelectedMeal(null);
  };

  const handleFavorite = (meal) => {
    const newFavorites = [...favorites, meal];
    setFavorites(newFavorites);
  
    fetch("http://localhost:3000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFavorites),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <section>
      <p className="wordspace" style={{ fontFamily: 'Poppins'}}>Find meals for your ingredients</p>
      <div className="search">
        <input
          type="text"
          placeholder="Search from over 2m+ recipes"
          value={searchInputText}
          onChange={(e) => setSearchInputText(e.target.value)}
        />

        <button type="submit" onClick={handleSearch}>
          Search
        </button>
        <select
          className="select"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="ingredient">Search by Ingredient</option>
          <option value="meal">Meal Name</option>
        </select>
      </div>
      <p style={{ fontFamily: 'Poppins'}} className='results'>Results:</p>
      <div className="container">
        {selectedMeal ? (
          <div className="modal">
            <div className="modal-content">
              <FavoriteButton itemId={selectedMeal.idMeal} onFavorite={handleFavorite} />
              <button className="close-btn" onClick={handleCloseRecipe}>
                &times;
              </button>
              <h2>{selectedMeal.strMeal}</h2>
              <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />

              <h3>Ingredients:</h3>
              <ul>
                {Object.keys(selectedMeal)
                  .filter((key) => key.startsWith("strIngredient") && selectedMeal[key])
                  .map((key, index) => {
                    const ingredient = selectedMeal[key];
                    const measureKey = `strMeasure${key.slice(13)}`;
                    const measurement = selectedMeal[measureKey];
                    return (
                      <li key={index}>
                        {`${ingredient} - ${measurement}`}
                      </li>
                    );
                  })}
              </ul>
              
              <h3>Instructions:</h3>
              <p>{selectedMeal.strInstructions}</p>
            </div>
          </div>
        ) : meals ? (
          <ul>
            {meals.map((meal) => (
              <li key={meal.idMeal}>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <a href="#" className="recipe-btn" onClick={() => handleGetRecipe(meal.idMeal)}>
                  Get Recipe
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
         <img src='https://www.themealdb.com/images/category/miscellaneous.png' className='decor5'/>
    <img src='https://www.themealdb.com/images/category/dessert.png' className='decor6'/>
    <img src='https://www.themealdb.com/images/category/side.png' className='decor'/>

      </div>
    </section>
  );
}

export default RecipeSearch;

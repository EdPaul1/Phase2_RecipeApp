import React, { useState } from "react";
import './RecipeSearch.css';

function RecipeSearch() {
  const [meals, setMeals] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");
  const [searchType, setSearchType] = useState("ingredient");

  const handleSearch = () => {
    let searchApi = "";
    if (searchType === "ingredient") {
      searchApi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInputText}`;
    } else if (searchType === "meal") {
      searchApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`;
    }

    fetch(searchApi)
      .then(response => response.json())
      .then(data => setMeals(data.meals))
      .catch(error => console.error(error));
  };

  return (
    <section>
      <div className="search">
        <input
          type="text"
          placeholder="Search for recipes"
          value={searchInputText}
          onChange={e => setSearchInputText(e.target.value)}
        />
    
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
        <select
          className="select"
          value={searchType}
          onChange={e => setSearchType(e.target.value)}
        >
          <option value="ingredient">Search by Ingredient</option>
          <option value="meal">Meal Name</option>
        </select>
      </div>
      <div className="container">
        {meals ? (
          <ul>
            {meals.map(meal => (
              <li key={meal.idMeal}>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <a href = "#" class = "recipe-btn">Get Recipe</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </section>
  );
}

export default RecipeSearch;

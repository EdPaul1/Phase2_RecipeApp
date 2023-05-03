import React, { useState, useEffect } from "react";
import './RecipeSearch.css';

function RecipeSearch() {
  const [meals, setMeals] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  const handleSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.meals);
        setMeals(data.meals);
      })
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
      </div>
      <div className="container">
        
      {meals ? (
  <ul>
    {meals.map(meal => (
      <li key={meal.idMeal}>
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </li>
    ))}
  </ul>
) : (
  <p>No meals found</p>
)}

        
      </div>
    </section>
  );
}

export default RecipeSearch;

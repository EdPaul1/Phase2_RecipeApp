import React, { useState, useEffect } from "react";
function RecipeSearch () {
    const [meals, setMeals] = useState([]);
    const [searchInputText, setSearchInputText] = useState('');
    const handleSearch = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
            .then(response => response.json())
            .then(data => setMeals(data.meals))
            .catch(error => console.error(error));
    }
    const handleInputChange = (event) => {
        setSearchInputText(event.target.value);
    }
    return(
        <section>
            <div className="search">
                <input type="text" placeholder="Search for recipes" value={searchInputText} onChange={handleInputChange} />
                <button type="submit" onClick={handleSearch}>Search</button>
            </div>
            <div className="container">
                {meals.map(meal => (
                    <div key={meal.idMeal}>
                        <h2>{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                ))}
            </div>
        </section>
    )
}
export default RecipeSearch;
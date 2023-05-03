import React, { useState, useEffect } from "react";

function RecipeSearch () {
    const [meals, setMeals] = useState([]);
    const [searchInputText, setSearchInputText] = useState('');

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
            .then(response => response.json())
            .then(data => setMeals(data.meals))
            .catch(error => console.error(error));
    }, [searchInputText]);

    const handleSearch = () => {
        setSearchInputText(document.querySelector('.search input').value);
    }

    return(
        <section>
            <div className="search">
                <input type="text" placeholder="Search for recipes" onChange={handleSearch} />
                <button type="submit" onClick={handleSearch}>Search</button>
            </div>
            <div className="container">
                <div className="add-recipe">
                    <button>Add Recipe</button>
                </div>
            </div>
        </section>
    )
}
export default RecipeSearch;

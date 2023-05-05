import React, { useState, useEffect } from "react";
import FavoriteButton from "./FavoriteButton";

function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFavorite = (itemId) => {
    const updatedFavorites = favorites.filter((id) => id !== itemId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <h1>Favorite Recipes</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((id) => (
            <li key={id}>
              <Recipe id={id} onRemoveFavorite={handleRemoveFavorite} />
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't added any recipes to your favorites yet.</p>
      )}
    </div>
  );
}

function Recipe({ id, onRemoveFavorite }) {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals?.[0]))
      .catch((error) => console.error(error));
  }, [id]);

  const handleRemove = () => {
    onRemoveFavorite(id);
  };

  return (
    <div>
      {meal ? (
        <div>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <FavoriteButton itemId={id} />
          <button onClick={handleRemove}>Remove from favorites</button>
        </div>
      ) : (
        <p>Loading recipe...</p>
      )}
    </div>
  );
}

export default FavoriteRecipes;
export { Recipe };
import React, { useState, useEffect } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch('recipes.json');
      const data = await response.json();
      setRecipes(data);
    }

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;

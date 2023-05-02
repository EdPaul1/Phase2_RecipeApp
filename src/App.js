import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/RecipeList';
import recipesData from './recipes.json';

function App() {
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <div>
      <header>
        <h1>Recipe App</h1>
        <div className="search">
          <input type="text" placeholder="Search for recipes" />
          <button type="submit">Search</button>
        </div>
      </header>
      <div className="container">
        <div className="add-recipe">
          <button>Add Recipe</button>
        </div>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

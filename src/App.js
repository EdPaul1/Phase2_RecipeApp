import React from 'react';
import RecipeList from './RecipeList';
import RecipeSearch from './RecipeSearch';

function App() {
  

  return (
    <div>
      <header>
        <h1>Recipe App</h1>  
      </header>
      <RecipeSearch/>
      <RecipeList/>
    </div>
  );
}

export default App;

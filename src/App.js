import React from 'react';
import RecipeList from './RecipeList';
import RecipeSearch from './RecipeSearch';
import './App.css'

function App() {
  

  return (
    <div>
      <header>
        <h1 className='title'>Recipe App</h1>  
      </header>
      <RecipeSearch/>
      <RecipeList/>
    </div>
  );
}

export default App;

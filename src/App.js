import React from 'react';
import RecipeList from './RecipeList';
import RecipeSearch from './RecipeSearch';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import Category from "./Category";
import Favorites from "./Favorites"
import News from './News';
import Navigation from "./Navigation";
// import RecipeList from "./RecipeList";

function App() {
  return (
 <>
  <Router>
    <NavBar />
    <Routes>
      <Route path='/' exact component={Home} />
      <Route path='/search' element={<RecipeSearch />} />
      <Route path='/favorites' component={<News />} />
      <Route path='/category' element={ Category} />
    </Routes>
  </Router>
  {/* <div>
    <header>
      <h1 className='title'>Recipe App</h1>  
    </header>
  </div> */}
</>

  );
}

export default App;

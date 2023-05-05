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
import About from "./About";
// import RecipeList from "./RecipeList";

function App() {
  return (
    <>
    <Router>
      <NavBar className='navi'/>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/favorites' component={Favorites} />
         <Route path='/news' component={News} />
      </Routes>
    </Router>

    </>
  );
}

export default App;

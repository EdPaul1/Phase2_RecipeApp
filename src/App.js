import React from 'react';
import RecipeList from './RecipeList';
import RecipeSearch from './RecipeSearch';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Home";
import About from "./About";
import Favorites from "./FavoriteButton"
import News from './News';




function App() {
 

  return (
    <>
    <Router>
      <Navbar className='navi'/>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/favorites' component={Favorites} />
         <Route path='/news' component={News} />
      </Routes>
    </Router>
    <div>
      <header>
        <h1 className='title'>Recipe App</h1>  
      </header>
      <Home />
    </div>
    </>
  );
}

export default App;

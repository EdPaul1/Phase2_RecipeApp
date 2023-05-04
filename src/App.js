import React from 'react';
import RecipeList from './RecipeList';
import RecipeSearch from './RecipeSearch';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Home";
import About from "./About";
import Favorites from "./Favorites"
import News from './News';
import NationalityCards from "./NationalityCards";



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
      <blockquote style={{ fontFamily: 'Poppins' }} className='quote'> “Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart.”
</blockquote>
<cite className='cite'>– Wolfgang Puck</cite>
      <img src='https://file.removal.ai/preview/tmp-6454168926567.png' className='decor2'/>
      <img src='https://www.themealdb.com/images/category/miscellaneous.png' className='decor'/>
      <img src='https://file.removal.ai/preview/tmp-645419aee366e.png' className='decor3'/>
      
      
      <RecipeSearch/>
      
      <RecipeList/>
    </div>
    </>
  );
}

export default App;

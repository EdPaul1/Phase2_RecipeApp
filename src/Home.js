
import React, { useState, useEffect } from 'react';
import "./Home.css";
import Menu from "./images/Menu.js";
import FavoriteButton from "./FavoriteButton.js";
import NationalityCards from "./NationalityCards.js";

function Home() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Read from local storage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));

    // Update state with stored values
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  return (
    <section className='home_page'>
      <div className="menu-container">
        <NationalityCards />    
      </div>
    
      <div className="row1">
        <img src="https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg" alt="Product 1" />
        <p><strong>A New Wave of Cooking through the Web</strong></p>
        <p>From discovering the secrets of great chefs, to finding just the right kitchen tools, to buying the most exotic cheeses and spices — you’ll find generous helpings of information and advice on the Web. This Application will allow you to search for any of your favorites foods and deliver it to you, in seconds complete with the full cooking instructions sourced from respected chefs and home tried recipes. Now, if you’ll pass the salt…</p>
      </div>

      <div className="row">
        <h2>Trending Recipes</h2>
        <div className="favorites">
          <FavoriteButton favorites={favorites} />
        </div>
      </div>
    </section>
  );
}

export default Home;
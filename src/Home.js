
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
    <>
    <div className='hometext' style={{ fontFamily: 'Poppins'}}> 
      <p className='s1'>Diversify Your Experience</p>
    <p className='s2'>What is your favourite cuisine?</p></div>

    <div>
      <NationalityCards />
    </div><section className='home_page'>
    <div className='quote-container'>
  <div className='quote-text'>
    <blockquote className='quote' style={{ fontFamily: 'Poppins'}}>“Cooking is not difficult. Everyone has taste, even if they don’t realize it. Even if you’re not a great chef, there’s nothing to stop you understanding the difference between what tastes good and what doesn’t.”</blockquote>
    <cite className='cite'> Gerard Depardieu</cite>
  </div>
  <img src='https://file.removal.ai/preview/tmp-645457b5d0389.png' className='decor4'/>
</div>


    <img src='https://www.themealdb.com/images/category/miscellaneous.png' className='decor'/>
    <img src='https://file.removal.ai/preview/tmp-6454460a5316f.png' className='decor2'/>
    <img src='https://file.removal.ai/preview/tmp-6454470ba2646.png' className='decor3'/>
     
        <div className="row1">
          <img src="https://c4.wallpaperflare.com/wallpaper/997/408/959/tomato-leaves-vegetables-meat-beef-wallpaper-preview.jpg" alt="Product 1" />
          <p><strong className='p-h' style={{ fontFamily: 'Poppins'}}>A New Wave of Cooking through the Web</strong></p>
          <p className='p-p' style={{ fontFamily: 'Poppins'}}>From discovering the secrets of great chefs, to finding just the right kitchen tools, to buying the most exotic cheeses and spices — you’ll find generous helpings of information and advice on the Web. This Application will allow you to search for any of your favorites foods and deliver it to you, in seconds complete with the full cooking instructions sourced from respected chefs and home tried recipes. Now, if you’ll pass the salt…</p>
        </div>

        <div className="row">
          <h2>Trending Recipes</h2>
          <div className="favorites">
            <FavoriteButton favorites={favorites} />
          </div>
        </div>
      </section></>
  );
}

export default Home;
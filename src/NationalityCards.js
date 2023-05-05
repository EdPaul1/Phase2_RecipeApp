import React, { useEffect, useState } from 'react';
import './NationalityCards.css';

const NationalityCards = () => {
  const [nationalities, setNationalities] = useState([]);
  const [nationalityImages, setNationalityImages] = useState([]);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then(response => response.json())
      .then(data => {
        setNationalities(data.meals);
      })
      .catch(error => {
        console.error('Error fetching nationalities:', error);
      });
  }, []);

  const getNationalityImage = async (nationality) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`);
    const data = await response.json();
    const meal = data.meals[0];
    return meal.strMealThumb;
  };

  useEffect(() => {
    Promise.all(nationalities.map(async (nationality) => await getNationalityImage(nationality.strArea)))
      .then(images => {
        setNationalityImages(images);
      })
      .catch(error => {
        console.error('Error fetching nationality images:', error);
      });
  }, [nationalities]);

  const handleNationalityClick = async (nationality) => {
    setSelectedNationality(nationality);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`);
    const data = await response.json();
    setMeals(data.meals);
  };

  return (
    <div className="nationality-cards-container">
      <div className="nationality-cards-wrapper">
        {nationalities.map((nationality, index) => (
          <div key={nationality.strArea} className="nationality-card" onClick={() => handleNationalityClick(nationality.strArea)}>
            <div className="nationality-card-circle" style={{backgroundImage: `url(${nationalityImages[index]})`}}>
              <span className="nationality-name" style={{ color: 'orangered', fontSize: '20px' }}>{nationality.strArea}</span>
            </div>
          </div>
        ))}
      </div>
      {selectedNationality && (
        <div className='selected-nationality'>
          <h2>{selectedNationality} Meals</h2>
          <div className="meals-container">
            {meals.map(meal => (
              <div key={meal.idMeal} className="meal-card">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NationalityCards;

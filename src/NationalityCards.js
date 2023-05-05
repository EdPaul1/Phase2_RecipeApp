import React, { useEffect, useState } from 'react';
import './NationalityCards.css';

const NationalityCards = () => {
  const [nationalities, setNationalities] = useState([]);
  const [nationalityImages, setNationalityImages] = useState([]);

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

  return (
    <div className="nationality-cards-container">
      <div className="nationality-cards-wrapper">
        {nationalities.map((nationality, index) => (
          <div key={nationality.strArea} className="nationality-card">
            <div className="nationality-card-circle" style={{backgroundImage: `url(${nationalityImages[index]})`}}>
              <span className="nationality-name" style={{ color: 'orangered' }}>{nationality.strArea}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NationalityCards;

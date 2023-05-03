import React, { useState, useEffect } from 'react';
import "./RecipeList.css";


function RecipeList() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="categories-list">
      {categories.map(category => (
        <div key={category.idCategory} className="category-item">
          <h2 className="category-title">{category.strCategory}</h2>
          <img className="category-image" src={category.strCategoryThumb} alt={category.strCategory} />
          {/* <p className="category-description">{category.strCategoryDescription}</p> */}
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
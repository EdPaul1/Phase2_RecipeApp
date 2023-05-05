import React, { useState, useEffect } from 'react';
import './RecipeList.css';
import MealList from './MealList';

function RecipeList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error(error));
  }, []);

  function handleCategoryClick(categoryName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then(response => response.json())
      .then(data => setSelectedCategory({ name: categoryName, meals: data.meals }))
      .catch(error => console.error(error));
  }

  function handleCloseClick() {
    setSelectedCategory(null);
  }

  return (
    <div >
      {!selectedCategory && (
        <div className="categories-list">
          {categories.map(category => (
            <div key={category.idCategory} className="category-item" onClick={() => handleCategoryClick(category.strCategory)}>
              <h2 className="category-title">{category.strCategory}</h2>
              <img className="category-image" src={category.strCategoryThumb} alt={category.strCategory} />
            </div>
          ))}
        </div>
      )}
      {selectedCategory && <MealList category={selectedCategory.name} meals={selectedCategory.meals} onCloseClick={handleCloseClick} />}
    </div>
  );
}

export default RecipeList;
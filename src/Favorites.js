import React, { useState, useEffect } from 'react';
import favoritesData from './favorites.json';
import FavoriteButton from './FavoriteButton';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load the favorites from favoritesData on component mount
  useEffect(() => {
    const favoriteItemIds = favoritesData.itemIds || [];
    setFavorites(favoriteItemIds);
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(itemId => (
            <li key={itemId}>
              <FavoriteButton itemId={itemId} />
              <span>{itemId}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites yet</p>
      )}
    </div>
  );
}

export default Favorites;
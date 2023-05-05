import React, { useState, useEffect } from 'react';

function FavoriteButton({ itemId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Load the favorite state from the JSON file on component mount
  useEffect(() => {
    fetch('/favorites.json')
      .then(response => response.json())
      .then(favorites => setIsFavorite(favorites.includes(itemId)))
      .catch(error => console.error(error));
  }, [itemId]);

  // Save the favorite state to the JSON file when it changes
  useEffect(() => {
    fetch('/favorites.json')
      .then(response => response.json())
      .then(favorites => {
        if (isFavorite && !favorites.includes(itemId)) {
          favorites.push(itemId);
          return fetch('/favorites.json', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(favorites)
          });
        } else if (!isFavorite && favorites.includes(itemId)) {
          favorites = favorites.filter(id => id !== itemId);
          return fetch('http://localhost:8001/favorites', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(favorites)
          });
        }
      })
      .catch(error => console.error(error));
  }, [itemId, isFavorite]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div onClick={toggleFavorite}>
      <span>{isFavorite ? '❤️' : '♡'}</span>
    </div>
  );
}

export default FavoriteButton;
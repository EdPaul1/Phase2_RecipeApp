import React, { useState } from "react";

function FavoriteButton(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);

    // send POST request to server with favorite data
    fetch('http://localhost:8001/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ itemId: props.itemId, isFavorite: !isFavorite })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to save favorite.');
      }
    })
    .catch(error => {
      console.error(error);
      setIsFavorite(isFavorite);
    });
  };

  return (
    <button onClick={handleFavorite}>{isFavorite ? 'Unfavorite' : 'Favorite'}</button>
  );
}

export default FavoriteButton;
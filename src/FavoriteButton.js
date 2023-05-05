import React, { useState, useEffect } from "react";

function FavoriteButton({ itemId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(itemId));
  }, [itemId]);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = isFavorite
      ? favorites.filter((id) => id !== itemId)
      : [...favorites, itemId];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={handleToggleFavorite}>
      {isFavorite ? "Remove from favorites" : "Add to favorites"}
    </button>
  );
}

export default FavoriteButton;
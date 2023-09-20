import { createContext, useState, useEffect } from 'react'

export const FavoriteContext = createContext()

export const Provider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState(localStorage.getItem('favoriteItems') ? JSON.parse(localStorage.getItem('favoriteItems')) : [])

  const addToFavorites = (item) => {
    const isItemInFavorites = favoriteItems.find((favoriteItem) => favoriteItem.id === item.id);

    if (isItemInFavorites) {
      setFavoriteItems(
        favoriteItems.map((favoriteItem) =>
          favoriteItem.id === item.id
            ? { ...favoriteItem, quantity: favoriteItem.quantity + 1 }
            : favoriteItem
        )
      );
    } else {
      setFavoriteItems([...favoriteItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromFavorites = (item) => {
    const isItemInFavorites = favoriteItems.find((favoriteItem) => favoriteItem.id === item.id);

    if (isItemInFavorites.quantity === 1) {
      setFavoriteItems(favoriteItems.filter((favoriteItem) => favoriteItem.id !== item.id));
    } else {
      setFavoriteItems(
        favoriteItems.map((favoriteItem) =>
          favoriteItem.id === item.id
            ? { ...favoriteItem, quantity: favoriteItem.quantity - 1 }
            : favoriteItem
        )
      );
    }
  };

  const clearFavorites = () => {
    setFavoriteItems([]);
  };

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  useEffect(() => {
    const favoriteItems = localStorage.getItem("favoriteItems");
    if (favoriteItems) {
      setFavoriteItems(JSON.parse(favoriteItems));
    }
  }, []);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
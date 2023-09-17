import React, { createContext, useState, useEffect } from 'react';

// Create the CartContext and provide the initial value (undefined)
export const WishListContext = createContext(undefined);

export const WishListProvider = ({ children }) => {  const [wishListItems, setWishListItems] = useState(
    localStorage.getItem('wishListItems')
      ? JSON.parse(localStorage.getItem('wishListItems'))
      : []
  );

  const addToWishList = (item) => {
    const isItemInWishlist = wishListItems.find((wishListItem) => wishListItem.id === item.id);

    if (isItemInWishlist) {
      setWishListItems(
        wishListItems.map((wishListItem) =>
        wishListItem.id === item.id
            ? { ...wishListItem, quantity: wishListItem.quantity + 1 }
            : wishListItem
        )
      );
    } else {
      setWishListItems([...wishListItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromWishList = (item) => {
    const isItemInWishlist = wishListItems.find((wishListItem) => wishListItem.id === item.id);

    if (isItemInWishlist && isItemInWishlist.quantity === 1) {
      setWishListItems(wishListItems.filter((wishListItem) => wishListItem.id !== item.id));
    } else {
      setWishListItems(
        wishListItems.map((wishListItem) =>
          wishListItem.id === item.id
            ? { ...wishListItem, quantity: wishListItem.quantity - 1 }
            : wishListItem
        )
      );
    }
  };

  const clearWishList = () => {
    setWishListItems([]);
  };

  const getWishListTotal = () => {
    return wishListItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem('wishListItems', JSON.stringify(wishListItems));
  }, [wishListItems]);

  useEffect(() => {
    const storedWishListItems = localStorage.getItem('wishListItems');
    if (storedWishListItems) {
      setWishListItems(JSON.parse(storedWishListItems));
    }
  }, []);

  return (
    <WishListContext.Provider
      value={{
        wishListItems,
        addToWishList,
        removeFromWishList,
        clearWishList,
        getWishListTotal
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

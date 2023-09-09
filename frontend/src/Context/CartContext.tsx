import React, { createContext, useState, useEffect } from 'react';

// Define the ItemType interface
export interface ItemType {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
}

// Define the CartContextType interface
export interface CartContextType {
  cartItems: ItemType[];
  addToCart: (item: ItemType) => void;
  removeFromCart: (item: ItemType) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

// Create the CartContext and provide the initial value (undefined)
export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {  const [cartItems, setCartItems] = useState<ItemType[]>(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
  );

  const addToCart = (item: ItemType) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: ItemType) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart && isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

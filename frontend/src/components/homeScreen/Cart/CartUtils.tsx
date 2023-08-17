import { useState } from 'react';
import { ProductItem } from '../productItem';

export interface CartItem {
  productName: string;
  description: string;
  price: number;
  quantity: number;
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: ProductItem) {
    const existingCartItem = cart.find(item => item.productName === product.name);

    if (existingCartItem) {
      const updatedCart = cart.map(item =>
        item.productName === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const newCartItem: CartItem = {
        productName: product.name,
        description: product.description,
        price: product.price,
        quantity: 1,
      };
      setCart([...cart, newCartItem]);
    }
  }

  function removeFromCart(productName: string) {
    const updatedCart = cart.filter(item => item.productName !== productName);
    setCart(updatedCart);
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return { cart, addToCart, removeFromCart, getTotalPrice };
}

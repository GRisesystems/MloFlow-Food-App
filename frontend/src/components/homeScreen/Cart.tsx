import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext, CartContextType } from '../../Context/CartContext';

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext<CartContextType>(CartContext);

  return (
    <>
    <h1 className="cart-tittle">Your Shopping Cart </h1>
      <div className="cart-container">
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div className="flex justify-between items-center" key={item.id}>
                <div className="flex gap-4">
                  <img src={item.imageOne} alt={item.title} width={100} className="cart-item-image" />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-bold">{item.name}</h1>
                    <p className="text-gray-600">KES {item.price}</p>
                  </div>
                </div>
                <div className="quantity-control">
                  <button
                    className="increase-item"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <p className='item-quantity'>{item.quantity}</p>
                  <button
                    className="decrease-item"
                    onClick={() => removeFromCart(item)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 ? (
            <div className="cart-footer">
              <h1 className="cart-total">Total: KES {getCartTotal()}</h1>
              <button
                className="empty-cart"
                onClick={clearCart}
              >
                Empty Cart
              </button>
            </div>
          ) : (
            <h1 className="cart-empty">Your cart is empty</h1>
          )}
        </div>
    </>
  );
}


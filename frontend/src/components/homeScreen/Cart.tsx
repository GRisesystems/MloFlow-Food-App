import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext, CartContextType } from '../../Context/CartContext';

export default function Cart({ showModal, toggle }: { showModal: boolean, toggle: () => void }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext<CartContextType>(CartContext);

  return (
    <>
      {showModal && (
        <div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">
          <h1 className="text-2xl font-bold">Cart</h1>
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Close
          </button>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div className="flex justify-between items-center" key={item.id}>
                <div className="flex gap-4">
                  <img src={item.thumbnail} alt={item.title} className="rounded-md h-24" />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-bold">{item.title}</h1>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => removeFromCart(item)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
              <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={clearCart}
              >
                Clear cart
              </button>
            </div>
          ) : (
            <h1 className="text-lg font-bold">Your cart is empty</h1>
          )}
        </div>
      )}
    </>
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool.isRequired, // Added propTypes validation
  toggle: PropTypes.func.isRequired, // Added propTypes validation
};

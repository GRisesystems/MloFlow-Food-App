import { useContext } from 'react';
import {WishListContext } from '../../Context/WishListContext';
import { Button, Container, Divider } from '@mui/material';
import { AddCircleOutlineRounded } from '@mui/icons-material';
import { RemoveCircleOutlineOutlined } from '@mui/icons-material';
import { ArrowLeftSharp } from '@mui/icons-material';
import './styles.css';
import { Link } from 'react-router-dom';

export default function WishList() {
  const {
    wishListItems, 
    addToWishList,
    removeFromWishList,
    clearWishList} = useContext(WishListContext);
  return (
    <Container maxWidth="md" className='cart'>
      <div className='shopping'>
    <h1 className="cart-tittle">Your Wish List </h1>
    <button className="empty-cart"
                onClick={clearWishList}
              >
                Empty List
              </button>
        </div>
    <Divider />
      <table className="cart-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price (KES)</th>
          </tr>
        </thead>
    {wishListItems.map((item) => (
        <tbody key={item.id}>
          <tr>
            <td>   
                    <h4 className="text-lg font-bold">{item.name}</h4>
                    </td>
                    <td>
                      <img src={item.imageOne} alt={item.title} width={60} className="cart-item-image" />
                      </td>
            <td>               
               <div className="quantity-control">
                   <AddCircleOutlineRounded   onClick={() =>addToWishList(item)}/>

                  <p className='item-quantity'>{item.quantity}</p>
                    <RemoveCircleOutlineOutlined  onClick={() => removeFromWishList(item)}/>
                </div>
                </td>
            <td>
            <p className="price">{item.price}</p>
            </td>
            <td>

            </td>
          </tr>
        </tbody>
        
        ))}
        </table>
        <div className="cart-footer">
        {wishListItems.length > 0 ? (
            <h4 className="cart-total">{(wishListItems.length)}</h4>
            ) : (
              <h1 className="cart-empty">Your Wish List is empty</h1>
              )}
              </div>
              <div>
                <Link to={'/products'}>
                <Button><ArrowLeftSharp />  Continue Shopping</Button>
                </Link>
                <Link to={'/checkout'}>
                <Button variant='contained' sx={{ float:'right'}}>Proceed to Checkout</Button>
                </Link>
              </div>
    </Container>
  );
}


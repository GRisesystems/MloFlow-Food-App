import { useContext } from 'react';
import { FavoriteContext } from '../../wishContext/FavoritesList';
import { Button, Container, Divider, Typography } from '@mui/material';
import { AddCircleOutlineRounded } from '@mui/icons-material';
import { RemoveCircleOutlineOutlined } from '@mui/icons-material';
import { ArrowLeftSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function WishList() {
  const { favoriteItems,
    addToFavorites,
    removeFromFavorites,
    clearFavorites, } = useContext(FavoriteContext);

   return (
    <Container  className='cart' >
      <Container className='shopping'>
    <Typography className='cart-title'> Your Shopping Cart </Typography>
    <Button variant='contained'  className="empty-cart"
                onClick={clearFavorites}
              >
                Clear Favorites
              </Button>
        </Container>
    <Divider />
      <table className="cart-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Add to Favourites</th>
            <th>Unit Price (KES)</th>
            <th>Sub Total (KES)</th>
          </tr>
        </thead>
    {favoriteItems.map((item) => (
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
                   <AddCircleOutlineRounded   onClick={() => addToFavorites(item)}/>

                  <p className='item-quantity'>{item.quantity}</p>
                    <RemoveCircleOutlineOutlined  onClick={() => removeFromFavorites(item)}/>
                </div>
                </td>
            <td>
             
            </td>
            <td>
            <p >{item.price}</p>
            </td>
            <td>
            <p className="price">{item.price * item.quantity}</p>
            </td>
          </tr>
        </tbody>
        
        ))}
        </table>
        <div className="cart-footer">
        {favoriteItems.length > 0 ? (
            <h4 className="cart-total">{favoriteItems.length}</h4>
            ) : (
              <h1 className="cart-empty">Your cart is empty</h1>
              )}
              </div>
              <div>
                <Link to={'/products'}>
                <Button><ArrowLeftSharp />  Continue Shopping</Button>
                </Link>
                <Link to={'/checkout-page'}>
                <Button variant='contained' sx={{ float:'right'}}>Proceed to Checkout</Button>
                </Link>
              </div>
    </Container>
  )
}


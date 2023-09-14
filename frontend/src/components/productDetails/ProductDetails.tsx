import  {useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Box, Button, Card,  CardActions,  CardContent, CardMedia,  Grid,  Typography } from '@mui/material';
import axios from 'axios';
import { CartContext, CartContextType } from '../../Context/CartContext'; 
import WishlistButton from '../homeScreen/WishlistBtn';
import styled from "styled-components";
import "./styles.css";

const ProductDetailed = () => {
const {  addToCart } = useContext<CartContextType>(CartContext);
  ;
    const { id } = useParams();
    const [product, setProduct] = useState("")

    const getProduct = async () => {
    const {data} = await axios.get(`http://localhost:8000/products/${id}/`)
      setProduct(data)
      console.log(data)
    }

    useEffect(() =>{
      getProduct();
    }, [])

  return (
      <Box className='detail-container'>
        <Typography variant="h3" sx={{backgroundColor:'#FBB31D',  mb:2, textAlign:'center'}}>Product Details</Typography>
        {/* #FBB31D, #0C0B0B */}
       < Grid container spacing={4} >
        <Grid item xs={12} md={8}>
          <CardMedia >
         <img  src={product.imageOne} alt={product.name}></img></CardMedia>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardContent>
              <Typography  className='name' >
                  <span>  Name: </span>  {product.name}
              </Typography>
              <Typography className='description'>
                  <span>  Description: </span>  {product.description}      
              </Typography>
              <Typography className='category' >
              <span>  Category:  </span>   {product.category}
              </Typography>                        
              <Typography className='stock' >
              <span> In Stock:  </span>   {product.stock}
              </Typography> 
              <Typography className='price'> 
              <span>  Price:  </span>
                  Ksh {product.price}
              </Typography>
            <CardActions sx={{marginTop:1, marginBottom:1}}>
              <Button variant='contained' sx={{backgroundColor:'#FBB31D', color:'#0C0B0B', marginRight:'1.5rem'}}
               onClick={() => addToCart(product)}>
                ADD TO CART
            </Button> 
              <WishlistButton 
                  initialLiked={false}
                  onToggleLike={() => {
                    // Handle like toggle logic here
                  } } amount={product.price}  />
                  </CardActions>                       
          </CardContent>
        </Grid>
       </Grid>
      </Box>
  );
}
export default ProductDetailed;


import  {useState, useEffect} from 'react';

import { Box, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import axios from 'axios';
import { FavoriteBorder, ShuffleOutlined } from '@mui/icons-material';
import { Visibility } from '@mui/icons-material';
import { useCart } from '../homeScreen/Cart/CartUtils';
import styled from "styled-components";

const ShowAllProducts = () => {
  const ProductPrice = styled.span`
font-size: 1.4rem;
font-weight: bold;
color: #FBB31D;
  
`;
const AddToCartButton = styled.div`
position: relative; /* or position: relative; based on parent container */
bottom: 10px;
top:5px;
left: 70px;
padding: 14px;
background-color: #FBB31D;
width: 120px;
height: 20px;
cursor: pointer;
display: flex;
align-items: center;
border-radius: 10px;
z-index: 1;
opacity: 1;

/* Media query for responsive design */
@media (max-width: 768px) {
  margin-top: 40px;
  position: static; /* Resetting position for smaller screens */
}
`;
const AddToCartButtonText = styled.span`
color: white;
font-size: 13px;
font-weight: bold;
@media (max-width: 768px) {
  margin-right: 10px;
}
     
`;
    const { addToCart } = useCart();
    const [products, setProducts] = useState([])

    const getProducts = async () => {
    const response = await axios.get('http://localhost:8000/products/')
      setProducts(response.data)
      console.log(response.data)
    }

    useEffect(() =>{
      getProducts();
    }, [])

  return (
      <Box sx={{ py: 8, m: 6 }} >
        <Typography variant="h3" sx={{backgroundColor:'#FBB31D',  mt:4, mb:2, textAlign:'center'}}>All Products</Typography>
        {/* #FBB31D, #0C0B0B */}
          <Grid container spacing={1} >
          {products.map((product) => (
            <Grid sx={{ display: 'flex', flexWrap: 'wrap', maxWidth:'16vw', m:2}}>
              <Card 
                sx={{ height: 'auto', display: 'flex', flexDirection: 'column' }}
              >
                     <CardMedia
                            component="img"
                            image={product.image}
                            alt={product.name}
                          />
                <CardContent sx={{ flexGrow: 1 }}>
                <CardActions sx={{opacity:0, color:'#FBB31D', "&:hover": {opacity: 1 },}}>
                <FavoriteBorder />
                <ShuffleOutlined />
                <Visibility />
                </CardActions>
                  <Typography gutterBottom variant="h4" component="h2" sx={{textAlign:'center'}}>
                    {product.name}
                  </Typography>
                  <ProductPrice> Ksh {product.price}</ProductPrice>
             <AddToCartButton onClick={() => addToCart(product)}>
              <AddToCartButtonText>ADD TO CART</AddToCartButtonText>
            </AddToCartButton>
                  <Typography variant='h6' sx={{mt:3,  "&:hover": {textDecoration:'underline' }}}>
                 <Link sx={{ color:'#0C0B0B', cursor:'pointer', textDecoration: 'none'}} to={'/'} >Product details </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
}
export default ShowAllProducts;


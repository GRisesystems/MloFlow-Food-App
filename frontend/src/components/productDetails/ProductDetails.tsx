import  {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Box, Card,  CardContent, CardMedia,  Typography } from '@mui/material';
import axios from 'axios';
// import { FavoriteBorder, ShuffleOutlined } from '@mui/icons-material';
// import { Visibility } from '@mui/icons-material';
import { useCart } from '../homeScreen/Cart/CartUtils';
import styled from "styled-components";

const ProductDetailed = () => {
  const ProductPrice = styled.span`
font-size: 1.4rem;
font-weight: bold;
color: #FBB31D;
  
`;
const AddToCartButton = styled.div`
position: relative; /* or position: relative; based on parent container */

padding: 14px;
background-color: #FBB31D;
width: 120px;
height: 20px;
cursor: pointer;
display: flex;
float: right;
align-items: center;
border-radius: 10px;


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
    const { id } = useParams()
    const [product, setProduct] = useState([])

    const getProduct = async () => {
    const {data} = await axios.get('http://localhost:8000/products/${id}')
      setProduct(data)
      console.log(data)
    }

    useEffect(() =>{
      getProduct();
    }, [])

  return (
      <Box sx={{maxWidth:'sm', margin:'auto'}}>
        <Typography variant="h3" sx={{backgroundColor:'#FBB31D',  mt:4, mb:2, textAlign:'center'}}>Product Details</Typography>
        {/* #FBB31D, #0C0B0B */}
              <Card >
                     <CardMedia
                            component="img"
                            image={product.image}
                            alt={product.name}
                          />
                <CardContent sx={{ flexGrow: 1 }}>
                {/* <CardActions >
                <FavoriteBorder sx={{ marginRight:'8px'}}/>
                <ShuffleOutlined sx={{ marginRight:'8px'}}/>
                <Visibility />
                </CardActions> */}
                  <Typography gutterBottom variant="h4" component="h2" sx={{textAlign:'center'}}>
                    {product.name}
                  </Typography>
                  <ProductPrice> Ksh {product.price}</ProductPrice>
             <AddToCartButton onClick={() => addToCart(product)}>
              <AddToCartButtonText>ADD TO CART</AddToCartButtonText>
            </AddToCartButton>
                  <Typography  sx={{mt:3, }}>
                      {product.description}
                  </Typography>
                  <Typography  sx={{mt:3, }}>
                      {product.category}
                  </Typography>
                </CardContent>
              </Card>
      </Box>
  );
}
export default ProductDetailed;


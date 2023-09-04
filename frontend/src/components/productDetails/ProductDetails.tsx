import  {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Box, Card,  CardContent, CardMedia,  Grid,  Typography } from '@mui/material';
import axios from 'axios';
// import { FavoriteBorder, ShuffleOutlined } from '@mui/icons-material';
// import { Visibility } from '@mui/icons-material';
// import { useCart } from '../homeScreen/Cart/CartUtils';
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
    // const { addToCart } = useCart();
    const { id } = useParams()
    const [product, setProduct] = useState([])

    const getProduct = async (id) => {
    const {data} = await axios.get('http://localhost:8000/products/${id}')
      setProduct(data)
      console.log(data)
    }

    useEffect(() =>{
      getProduct(product.id);
    }, [])

  return (
      <Box sx={{maxWidth:'sm', margin:'auto'}}>
        <Typography variant="h3" sx={{backgroundColor:'#FBB31D',  mt:4, mb:2, textAlign:'center'}}>Product Details</Typography>
        {/* #FBB31D, #0C0B0B */}
       < Grid container spacing={4} >
        <Grid item xs={12} md={8}>
          <CardMedia  image={product.image} title={product.name}/>
        </Grid>
        <Grid item xs={12} md={4}>
              <Typography gutterBottom variant="h4" component="h2" sx={{textAlign:'center'}}>
                    {product.name}
                  </Typography>
                  <Typography component="p"  sx={{mt:3, }}>
                      {product.description}
                  </Typography>
                  <ProductPrice> Ksh {product.price}</ProductPrice>
                    <Typography  sx={{mt:3, }}>
                      {product.category}
                  </Typography>
        </Grid>
       </Grid>
      </Box>
  );
}
export default ProductDetailed;


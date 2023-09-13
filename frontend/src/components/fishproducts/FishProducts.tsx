import  {useState, useEffect} from 'react';

import { Box, Card, CardActions, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import axios from 'axios';
// import { useCart } from '../homeScreen/Cart/CartUtils';
import WishlistButton from '../homeScreen/WishlistBtn';
import styled from "styled-components";
import "./styles.css";

const FishProducts = () => {
  const ProductPrice = styled.span`
font-size: .8rem;
font-weight: 700;
color: #0C0B0B;
  
`;
const AddToCartButton = styled.button`
background-color: #FBB31D;
margin-left:7px;
padding:4px 6px;
border:none;
font-size:.9rem;
font-weight:500;
border-radius:8px;
`;
const CounterWrapper = styled.div`
  margin-left: 50px;
  display:flex;
`;

const CounterButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fbb31d;
  color: #0C0B0B;
  cursor: pointer;
  transition: background-color 0.3s ease;
  

  &:hover {
    background-color: #d5b542;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #0C0B0B;
  }
`;

const CounterNum = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 0 10px;
  color: #0C0B0B;
`;

const [counts, setCounts] = useState<{ [productId: string]: number }>({});

 
const handleIncrement = (productId: string) => {
  setCounts((prevCounts) => {
    const currentCount = prevCounts[productId] || 0;
    const newCounts = { ...prevCounts, [productId]: currentCount + 1 };
    return newCounts;
  });
};

const handleDecrement = (productId: string) => {
  setCounts((prevCounts) => {
    const currentCount = prevCounts[productId] || 0;
    const newCounts = { ...prevCounts, [productId]: currentCount > 0 ? currentCount - 1 : 0 };
    return newCounts;
  });
};
    // const { addToCart } = useCart();
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
        <Typography variant="h3" sx={{backgroundColor:'#FBB31D',  mt:4, mb:2, textAlign:'center'}}>Fish Products</Typography>
        {/* #FBB31D, #0C0B0B */}
          <Grid container spacing={1} >
          {products.map((product) => {
            if (product.category === "Fish") {
              return  (
            <Grid sx={{ display: 'flex', flexWrap: 'wrap', maxWidth:'16vw', m:2}}>
              <Card className='custom-card'
                sx={{ height: 'auto', display: 'flex', flexDirection: 'column' }}
              >
                  
                <Link  href={`/products/${product.id}`} >
                  <CardActionArea>
                     <CardMedia
                            component="img"
                            image={product.imageOne}
                            alt={product.name}
                          />
                          
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{textAlign:'center'}}>
                    {product.name}
                  </Typography>
               </CardContent>
                  <Typography gutterBottom variant="h5" component="h4" >
                    View 
                  </Typography>
                  </CardActionArea>
                  </Link>
                  <CardActions>
                  <ProductPrice> KES {product.price}</ProductPrice>
             <AddToCartButton onClick={() => addToCart(product)}>
                ADD TO CART
            </AddToCartButton> 
            </CardActions>
            <CardActions>
              <WishlistButton 
              initialLiked={false}
              onToggleLike={() => {
                // Handle like toggle logic here
              }}
              amount={product.price} 
            />
                        <CounterWrapper>
                <CounterButton onClick={() => handleDecrement(product.id.toString())}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 13H5v-2h14v2z"/>
                  </svg>
                </CounterButton>
                <CounterNum>
                  {/* Display "00" as default */}
                  {counts[product.id] === undefined ? '00' : counts[product.id] < 10 ? `0${counts[product.id]}` : counts[product.id]}
                </CounterNum>
                <CounterButton onClick={() => handleIncrement(product.id.toString())}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z"/>
                  </svg>
                </CounterButton>
              </CounterWrapper>
                  </CardActions>
              
              </Card>
            </Grid>)
          }}
          )
          } 
        </Grid>
      </Box>
  );
}
export default FishProducts;

function useCart(): { addToCart: any; } {
  throw new Error('Function not implemented.');
}


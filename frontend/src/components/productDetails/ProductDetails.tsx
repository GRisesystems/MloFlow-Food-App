import  {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Box, Card,  CardActions,  CardContent, CardMedia,  Grid,  Typography } from '@mui/material';
import axios from 'axios';
// import { useCart } from '../homeScreen/Cart/CartUtils';
import WishlistButton from '../homeScreen/WishlistBtn';
import styled from "styled-components";
import "./styles.css";

const ProductDetailed = () => {
  const WeightRangeDropdown = styled.select`
  margin-top:4px;
  padding: 5px;
  color: #0C0B0B;
  margin-bottom: 0px;
  font-weight: 700;
  border: narrow ##0C0B0B;
`;

const AddToCartButton = styled.div`
position: relative; /* or position: relative; based on parent container */
margin-top:10px;
float: right;
width: auto;
display: flex;
cursor: pointer;
padding: 4px 8px;
align-items: center;
border-radius: 10px;
background-color: #FBB31D;


/* Media query for responsive design */
@media (max-width: 768px) {
  margin-top: 40px;
  position: static; /* Resetting position for smaller screens */
}
`;

const CounterWrapper = styled.div`
  display:flex;
  float:right;
  margin-top:4px;
`;

const CounterButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
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
              <Box sx={{marginTop:1, marginBottom:1}}>
              {/* <Typography className='quantity' >
              <span> Quantity:  </span>   
              </Typography>   */}
               <WeightRangeDropdown>
            <option value="1">1 kg</option>
            <option value="5">5 kg</option>
            <option value="10">10 kg</option>
          </WeightRangeDropdown>
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
              </Box>
              <AddToCartButton onClick={() => addToCart(product)}>
                ADD TO CART
            </AddToCartButton> 
            <CardActions>
              <WishlistButton 
              initialLiked={false}
              onToggleLike={() => {
                // Handle like toggle logic here
              }}
              amount={product.price} 
            />
                  </CardActions>                       
          </CardContent>
        </Grid>
       </Grid>
      </Box>
  );
}
export default ProductDetailed;


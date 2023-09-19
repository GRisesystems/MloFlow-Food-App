import  {useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Container, Button,   CardActions,  CardContent, CardMedia,  Grid,  Typography } from '@mui/material';
import axios from 'axios';
import { CartContext } from '../../context/Cart';  
import WishlistButton from '../homeScreen/WishlistBtn';
import { ArrowLeftSharp } from '@mui/icons-material';
import './styles.css';
import { Link } from 'react-router-dom';
import "./styles.css";

const ProductDetailed = () => {
const   {addToCart}  = useContext(CartContext);
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
      <Container className='detail-container'>
        <Typography className="product-detail" >Product Details</Typography>
        {/* #FBB31D, #0C0B0B */}
       < Grid container spacing={4} >
        <Grid item xs={12} md={6}>
          <CardMedia >
         <img  src={product.imageOne} alt={product.name}></img></CardMedia>
        </Grid>
        <Grid item xs={12} md={6}>
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
              <Button variant='contained' sx={{backgroundColor:'#FBB31D', color:'#0C0B0B', marginRight:'30%'}}
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
       <div >
                <Link to={'/products'}>
                <Button><ArrowLeftSharp />  Continue Shopping</Button>
                </Link>
                <Link to={'/shopping-cart'}>
                <Button variant='contained' sx={{ float:'right'}}>View Cart</Button>
                </Link>
              </div>
      </Container>
  );
}
export default ProductDetailed;


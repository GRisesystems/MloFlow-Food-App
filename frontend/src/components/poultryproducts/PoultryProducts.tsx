import  {useContext, useState, useEffect} from 'react';
import { Box, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import axios from 'axios';
import { CartContext, CartContextType } from '../../Context/CartContext'; 
import WishlistButton from '../homeScreen/WishlistBtn';
import "./styles.css";

const PoultryProducts = () => {

const { addToCart } = useContext<CartContextType>(CartContext);
 
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
      <Box sx={{ m: 4 }} >
        <Typography variant="h3" sx={{backgroundColor:'#FBB31D',  mt:4, mb:2, textAlign:'center'}}>Poultry</Typography>
        {/* #FBB31D, #0C0B0B */}
          <Grid container spacing={1} >
          {products.map((product) => {
            if (product.category === "Poultry") {
              return  (
            <Grid sx={{ display: 'flex', flexWrap: 'wrap', width:'16vw', m:2}} >
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
                  <Typography component='h4' sx={{mr:6, fontWeight:700}}> KES {product.price}</Typography>
              <WishlistButton 
              initialLiked={false}
              onToggleLike={() => {
                // Handle like toggle logic here
              }}
              amount={product.price} 
            />
                  </CardActions>
                  <Button variant='contained' sx={{backgroundColor:'#FBB31D', color:'#0C0B0B'}}
               onClick={() => addToCart(product)}>
                ADD TO CART
            </Button> 
              </Card>
            </Grid>)
          }}
          )
          } 
        </Grid>
      </Box>
  );
}
export default PoultryProducts;


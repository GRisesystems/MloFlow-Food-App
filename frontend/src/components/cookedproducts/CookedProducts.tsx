// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FavoriteBorder } from '@mui/icons-material';
import { ShuffleOutlined } from '@mui/icons-material';
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import beef from "../../assets/Cooked/Beef.jpg";
import chicken from "../../assets/Cooked/Chicken.jpg";
import chip from "../../assets/Cooked/Chipo.jpg";
import choma from "../../assets/Cooked/Choma.jpg";
import cod from "../../assets/Cooked/Cod.jpg";
import ugali from "../../assets/Cooked/ugali.jpg";
import seabass from "../../assets/Cooked/SeaBass.jpg";
import trout from "../../assets/Cooked/Trout.jpg";
import kuku from "../../assets/Cooked/Kuku.jpg";

const products = [
  {
    id:1,
    photo: beef,
    producename: "Beef",
    price: "$ 4.20 per Kg",
  },
  {
    id:2,
    photo: chip,
    producename: "Chips",
    price: "$ 7.49 per Kg",
  },
  {
    id:3,
    photo: kuku,
    producename: "Kuku Choma",
    price: "$ 10.00 per Kg",
  },
  {
    id:4,
    photo: choma,
    producename: "Nyama Choma",
    price: "$ 6.80 per Kg",
  },
  {
    id:5,
    photo: chicken,
    producename: "Chicken",
    price: "$ 6.80 per Kg",
  },
  {
    id:6,
    photo: cod,
    producename: "Cod",
    price: "$ 4.20 per Kg",
  },
  {
    id:7,
    photo: seabass,
    producename: "SeaBass",
    price: "$ 7.49 per Kg",
  },
  {
    id:8,
    photo: ugali,
    producename: "Ugali",
    price: "$ 10.00 per Kg",
  },
  {
    id:9,
    photo: trout,
    producename: "Trout",
    price: "$ 6.80 per Kg",
  },
  {
    id:10,
    photo: chicken,
    producename: "Chicken",
    price: "$ 6.80 per Kg",
  },
 
];

const CookedProducts = () => {
  return (
        <Box sx={{ py: 8, m: 6 }} >
          <Typography variant='h3' sx={{mb:3, textAlign:'center', color:'#FFA000'}}>
           Deliciously Cooked Food 
          </Typography>
          <Grid container spacing={1} >
            {products.map((product) => (
              <Grid key={product.id} sx={{ display: 'flex', flexWrap: 'wrap', maxWidth:'16vw', m:2}}>
                <Card 
                  sx={{ height: 'auto', display: 'flex', flexDirection: 'column' }}
                >
                       <CardMedia
                              component="img"
                              image={product.photo}
                              alt={product.producename}
                            />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <CardActions sx={{opacity:0, color:'#FFA000', "&:hover": {opacity: 1 },}}>
                  <FavoriteBorder />
                  <ShuffleOutlined />
                  <VisibilityIcon />
                  </CardActions>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.producename}
                    </Typography>
                    <Typography sx={{fontWeight:700, color:'#FFA000'}}>
                   {product.price}
                    </Typography>
                    <Typography sx={{fontWeight:700, color:'000'}}>
                   <Link to={'/'} >Select Options <DoubleArrowIcon sx={{color:'#FFA000'}}/></Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
  );
}
export default CookedProducts;
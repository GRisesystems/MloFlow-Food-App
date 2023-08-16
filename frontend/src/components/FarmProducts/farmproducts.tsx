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

import carrot from "../../assets/farmProduce/Carrots.jpg";
import berries from "../../assets/farmProduce/Berries.jpg";
import onion from "../../assets/farmProduce/Onions.jpg";
import pears from "../../assets/farmProduce/Pears.jpg";
import tomato from "../../assets/farmProduce/Tomatoes.jpg";

const products = [
  {
    id:1,
    photo: {berries},
    producename: "Berries",
    price: "$ 3.20 per Kg",
  },
  {
    id:2,
    photo: {carrot},
    producename: "Carrots",
    price: "$ 4.20 per Kg",
  },
  {
    id:3,
    photo: {onion},
    producename: "Onions",
    price: "$ 7.49 per Kg",
  },
  {
    id:4,
    photo: {pears},
    producename: "Pears",
    price: "$ 19.99, per Kg",
  },
  {
    id:5,
    photo: {tomato},
    producename: "Tomatoes",
    price: "$ 10.00 per Kg",
  },
  {
    id:6,
     photo: {berries},
    producename: "Kales",
    price: "$ 4.00 per Kg",
  },
  {
    id:7,
      photo: {berries},
    producename: "Guava",
    price: "$ 3.00 per Kg",
  },
  {
    id:8,
      photo: {berries},
    producename: "Oranges",
    price: "$ 10.00 per Kg",
  },
  {
    id:9,
     photo: {berries},
    producename: "Cabbage",
    price: "$ 8.00 per Kg",
  },
  {
    id:10,
      photo: {berries},
    producename: "Lemon",
    price: "$ 6.80 per Kg",
  },
  {
    id:11,
      photo: {berries},
    producename: "Avocado",
    price: "$ 3.00 per Kg",
  },
  {
    id:12,
      photo: {berries},
    producename: "Pawpaw",
    price: "$ 5.49 per Kg",
  },
  {
    id:13,
      photo: {berries},
    producename: "Pepper",
    price: "$ 2.49 per Kg",
  },
  {
    id:14,
     photo: {berries},
    producename: "Beans",
    price: "$ 8.49 per Kg",
  },
  {
    id:15,
      photo: {berries},
    producename: "Cassava",
    price: "$ 8.49 per Kg",
  },
  {
    id:16,
      photo: {berries},
    producename: "Cassava",
    price: "$ 8.49 per Kg",
  },
  {
    id:17,
     photo: {berries},
    producename: "Maize",
    price: "$ 8.49 per Kg",
  },
  {
    id:18,
      photo: {berries},
    producename: "Spinach",
    price: "$ 8.49 per Kg",
  },
  {
    id:19,
      photo: {berries},
    producename: "Spinach",
    price: "$ 8.49 per Kg",
  },
  {
    id:20,
      photo: {berries},
    producename: "Spinach",
    price: "$ 8.49 per Kg",
  },
];

const FarmProduce = () => {
  return (
        <Box sx={{ py: 8, m: 6 }} >
          <Grid container spacing={2} >
            {products.map((product) => (
              <Grid  sx={{ display: 'flex', flexWrap: 'wrap', maxWidth:'15vw', m:4}}>
                <Card 
                  sx={{ height: 'auto', display: 'flex', flexDirection: 'column' }}
                >
                       <CardMedia
                              component="img"
                              image="{product.photo}"
                              alt="Paella dish"
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
export default FarmProduce;
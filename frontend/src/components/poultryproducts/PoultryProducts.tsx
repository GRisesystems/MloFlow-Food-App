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

import chicken from "../../assets/Poultry/Chicken.jpg";
import egg from "../../assets/Poultry/Eggs.jpg";
import quail from "../../assets/Poultry/Quail.jpg";
import turkey from "../../assets/Poultry/Turkey.jpg";
import duck from "../../assets/Poultry/Duck.jpg";

const products = [
  {
    id:1,
    photo: duck,
    producename: "Duck",
    price: "$ 3.20 per Kg",
  },
  {
    id:2,
    photo: chicken,
    producename: "Chicken",
    price: "$ 4.20 per Kg",
  },
  {
    id:3,
    photo: egg,
    producename: "Eggs",
    price: "$ 7.49 per Kg",
  },
  {
    id:4,
    photo: quail,
    producename: "Quail",
    price: "$ 19.99, per Kg",
  },
  {
    id:5,
    photo: turkey,
    producename: "Turkey",
    price: "$ 10.00 per Kg",
  },
  // {
  //   id:6,
  //   photo: frenchbean,
  //   producename: "French Beans",
  //   price: "$ 4.00 per Kg",
  // },
  // {
  //   id:7,
  //   photo: maize,
  //   producename: "Maize",
  //   price: "$ 3.00 per Kg",
  // },
  // {
  //   id:8,
  //   photo: bean,
  //   producename: "Beans",
  //   price: "$ 10.00 per Kg",
  // },
  // {
  //   id:9,
  //   photo: avocado,
  //   producename: "Avocado",
  //   price: "$ 8.00 per Kg",
  // },
  // {
  //   id:10,
  //   photo: banana,
  //   producename: "Banana",
  //   price: "$ 6.80 per Kg",
  // },
  // {
  //   id:11,
  //   photo: apple,
  //   producename: "Apples",
  //   price: "$ 6.80 per Kg",
  // },
  // {
  //   id:12,
  //   photo: pears,
  //   producename: "Pears",
  //   price: "$ 6.80 per Kg",
  // },
  // {
  //   id:13,
  //   photo: orange,
  //   producename: "Oranges",
  //   price: "$ 6.80 per Kg",
  // },
  // {
  //   id:14,
  //   photo: berries,
  //   producename: "Berries",
  //   price: "$ 6.80 per Kg",
  // },
  // {
  //   id:15,
  //   photo: watermelon,
  //   producename: "Watermelon",
  //   price: "$ 6.80 per Kg",
  // },
 
];


const PoultryProducts = () => {
  return (
        <Box sx={{ py: 8, m: 6 }} >
            <Typography variant='h3' sx={{mb:3, textAlign:'center', color:'#FFA000'}}>
           Poutltry Products
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
export default PoultryProducts;
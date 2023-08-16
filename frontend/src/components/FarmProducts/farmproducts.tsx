// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Berries from '../../public/images/Fresh Produce/Berries.jpg';
// import Carrots from '../../public/images/Fresh Produce/Carrots.jpg';
// import Onions from '../../public/images/Fresh Produce/Onions.jpg';
// import Pears from '../../public/images/Fresh Produce/Pears.jpg';
// import Tomatoes from '../../public/images/Fresh Produce/Tomatoes.jpg';
import { FavoriteBorder } from '@mui/icons-material';
import { ShuffleOutlined } from '@mui/icons-material';
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from 'react-router-dom';

const products = [
  {
    id:1,
    // imageUrl: {Berries},
    producename: "Berries",
    price: "$ 80.00",
  },
  {
    id:2,
    // imageUrl: {Carrots},
    producename: "Carrots",
    price: "$ 40.00",
  },
  {
    id:3,
    // imageUrl: {Onions},
    producename: "Onions",
    price: "$ 1.00 per Kg",
  },
  {
    id:4,
    // imageUrl: {Pears},
    producename: "Pears",
    price: "$ 10.00 per Kg",
  },
  {
    id:5,
    // imageUrl: {Tomatoes},
    producename: "Tomatoes",
    price: "$ 100.00 per Kg",
  },
  {
    id:6,
    // imageUrl: {Tomatoes},
    producename: "Kales",
    price: "$ 100.00 per Kg",
  },
  {
    id:7,
    // imageUrl: {Onions},
    producename: "Guava",
    price: "$ 100.00 per Kg",
  },
  {
    id:8,
    // imageUrl: {Pears},
    producename: "Oranges",
    price: "$ 100.00 per Kg",
  },
  {
    id:9,
    // imageUrl: {Carrots},
    producename: "Cabbage",
    price: "$ 100.00 per Kg",
  },
  {
    id:10,
    // imageUrl: {Berries},
    producename: "Lemon",
    price: "$ 100.00 per Kg",
  },
];

const defaultTheme = createTheme();
const FarmProduce = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box sx={{ py: 8, m: 6 }} >
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid  sx={{ display: 'flex', flexWrap: 'wrap', maxWidth:'100vw' }}>
                <Card 
                  sx={{ height: 'auto', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia key={product.id} >
                  </CardMedia>
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
                   <Link to={'/'} color='primary'>Select Options </Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>

    </ThemeProvider>
  );
}
export default FarmProduce;
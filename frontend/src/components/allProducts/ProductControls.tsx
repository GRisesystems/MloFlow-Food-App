
import {Button,  Grid } from '@mui/material';
import AddProductsForm from '../newproductupload/AddProducts';
import UpdateProductForm from '../newproductupload/UpdateProduct';

const ProductControllar = () => {
  
  return (

<Grid container spacing={4} marginLeft={8}>
  <Grid item xs={4}>
       <AddProductsForm />
  </Grid>
  <Grid item xs={4}>          
      <UpdateProductForm />
  </Grid>
  <Grid item xs={4}>       
    <Button variant="contained" color="error" sx={{  padding:'6px', margin:3 }}>
             DELETE
      </Button>
  </Grid>
</Grid>
  );
};
export default ProductControllar;
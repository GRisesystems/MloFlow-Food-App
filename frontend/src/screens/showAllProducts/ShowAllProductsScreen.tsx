import React from 'react';
import ShowAllProducts from '../../components/allProducts/ShowAllProducts';
import Paginated from '../../components/farmProducts/Paginated';
import AddProductsForm from '../../components/newproductupload/AddProducts';
import { Box } from '@mui/material';
const AllProductScreen = () => {
  return (
      <Box >
        <AddProductsForm />
        <ShowAllProducts />
        <Paginated />
      </Box>
  );
};
export default AllProductScreen;
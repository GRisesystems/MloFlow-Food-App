
import ShowAllProducts from '../../components/allProducts/ShowAllProducts';
import Paginated from '../../components/farmProducts/Paginated';
import { Box } from '@mui/material';
const AllProductScreen = () => {
  return (
      <Box >
        <ShowAllProducts />
        <Paginated />
      </Box>
  );
};
export default AllProductScreen;
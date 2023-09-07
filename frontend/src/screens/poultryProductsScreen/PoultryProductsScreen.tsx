import { Box } from "@mui/material";
import Paginated from "../../components/farmProducts/Paginated";
import PoultryProducts from "../../components/poultryproducts/PoultryProducts";
import AddProduct from "../../components/newproductupload/UploadProductsForm";
const PoultryProductsScreen = () => {
  return (
    <Box >
      <PoultryProducts />
      <AddProduct />
      <Paginated />
    </Box>
  );
}
export default PoultryProductsScreen;
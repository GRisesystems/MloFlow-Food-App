import { Box } from "@mui/material";
import Paginated from "../../components/farmproducts/Pagination";
import PoultryProducts from "../../components/poultryproducts/PoultryProducts";

const PoultryProductsScreen = () => {
  return (
    <Box >
      <PoultryProducts />
      <Paginated />
    </Box>
  );
}
export default PoultryProductsScreen;
import { Box } from "@mui/material";
import Paginated from "../../components/farmProducts/Paginated";
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
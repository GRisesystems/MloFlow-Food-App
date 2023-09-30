import { Box } from "@mui/material";
import Paginated from "../../components/farmProducts/Paginated";
import CookedProducts from "../../components/cookedproducts/CookedProducts";

const CookedProductsScreen = () => {
  return (
    <Box >
      <CookedProducts />
      <Paginated />
    </Box>
  );
}
export default CookedProductsScreen;
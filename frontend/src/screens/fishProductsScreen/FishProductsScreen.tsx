import { Box } from "@mui/material";
import Paginated from "../../components/farmproducts/Pagination";
import FishProducts from "../../components/fishproducts/FishProducts";

const FishProductsScreen = () => {
  return (
    <Box >
      <FishProducts />
      <Paginated />
    </Box>
  );
}
export default FishProductsScreen;
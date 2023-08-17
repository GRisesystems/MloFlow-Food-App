import { Box } from "@mui/material";
import Paginated from "../../components/farmproducts/Pagination";
import FarmProduce from "../../components/farmproducts/FarmProducts";

const FarmProduceScreen = () => {
  return (
    <Box >
      <FarmProduce />
      <Paginated />
    </Box>
  );
}
export default FarmProduceScreen;
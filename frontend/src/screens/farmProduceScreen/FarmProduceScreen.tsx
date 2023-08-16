import { Box } from "@mui/material";
import Paginated from "../../components/FarmProducts/pagination";
import FarmProduce from "../../components/FarmProducts/farmproducts";

const FarmProduceScreen = () => {
  return (
    <Box >

                   <FarmProduce />
                    <Paginated  />
    </Box>
  );
}
export default FarmProduceScreen;
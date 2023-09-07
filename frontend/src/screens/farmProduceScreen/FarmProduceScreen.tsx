import { Box } from "@mui/material";
import Paginated from "../../components/farmProducts/Paginated";
import FarmProduce from "../../components/farmProducts/FarmProduce";

const FarmProduceScreen = () => {
  return (
    <Box >
      <FarmProduce />
      <Paginated />
    </Box>
  );
}
export default FarmProduceScreen;
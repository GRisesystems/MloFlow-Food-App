import { Box, Container,Grid } from "@mui/material"
import CheckOutBilingDetailsForm from "../../components/checkout/CheckOutBilingDetailsForm"
import OrderDetails from "../../components/checkout/OrderDetails"


const CheckoutScreen = () => {
  return (
    <Box>
        CheckoutScreen
        <Container>
            <Grid container spacing={2}>
                <Grid xs={12} md={8}>
                    <CheckOutBilingDetailsForm/>
                </Grid>
                <Grid xs={12} md={4} sx={{border:'4px solid #a5a8ad'}}>
                    <OrderDetails/>
                </Grid>

            </Grid>
        </Container>
    </Box>
  )
}

export default CheckoutScreen
import { Box, Container,Grid } from "@mui/material"
import CheckOutBilingDetailsForm from "../../components/checkout/CheckOutBilingDetailsForm"
import OrderDetails from "../../components/checkout/OrderDetails"
import CheckoutTopSection from "../../components/checkout/CheckoutTopSection"
import ApplyCouponAccordion from "../../components/checkout/ApplyCouponAccordion"


const CheckoutScreen = () => {
  return (
    <Box>
        <CheckoutTopSection/>
        <Container>
            <ApplyCouponAccordion/> 
            <Grid container spacing={2}>
                <Grid xs={12} md={7}>
                    <CheckOutBilingDetailsForm/>
                </Grid>
                <Grid xs={12} md={5}>
                    <OrderDetails/>
                </Grid>

            </Grid>
        </Container>
    </Box>
  )
}

export default CheckoutScreen
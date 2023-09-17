import { Box, Button, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import ApplyCouponAccordion from "./ApplyCouponAccordion";

const OrderDetails = () => {
  return (
    <Box sx={{ border: '4px solid #a5a8ad', m: 3 }}>
      <Box sx={{ m: 3 }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Your Order
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Product</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <Divider />
          {/* table body */}
          <TableBody>
            <TableRow>
              <TableCell>onions</TableCell>
              <TableCell align="right">Ksh 1200.00</TableCell>
            </TableRow>
            <TableRow>
          <ApplyCouponAccordion />
            </TableRow>
            <Divider />
            {/* sub total section */}
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Subtotal</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Ksh 1200.00</TableCell>
            </TableRow>
            {/* Total Section */}
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>
                Total
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold', color: 'green' }}>Ksh 1200.00</TableCell>
            </TableRow>

          </TableBody>
        </Table>
        <Typography variant="body1" sx={{mt:2,mb:2}}>
          Your personal data will be used to process your order, 
          support your experience throughout this website, 
          and for other purposes described in our <span style={{color:'green'}}>privacy policy</span>.
        </Typography>
        <Button sx={{width:'100%'}} color="success" variant="contained">Place Order</Button>
      </Box>
    </Box>
  )
}

export default OrderDetails;

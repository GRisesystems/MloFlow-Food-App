import * as React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/Cart';
import {Box, Grid, List, ListItem, ListItemText, Typography} from '@mui/material';
import ApplyCouponAccordion from '../checkout/ApplyCouponAccordion';
import axios from "axios";


// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

export default function Review() {
    const { cartItems, getCartTotal } = useContext(CartContext);

    const [itemName, setItemName] = useState('')
    const [itemQuantity, setItemQuantity] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const [deliveryCost, setDeliveryCost] = useState('')
    const [vat, setVat] = useState('')
    const [totalCost, setTotalCost] = useState('')
    const [couponCode, setCouponCode] = useState('')
    const [delivery, setDelivery] = useState('')
    const [paymentMethod, setPaymentMenthod] = useState('')

    const OrderInfo = async () => {
      const formField = new FormData()
  
      formField.append('itemName', itemName)
      formField.append('itemQuantity', itemQuantity)
      formField.append('itemPrice',  itemPrice)
      formField.append('deliveryCost', deliveryCost)
      formField.append('vat', vat)
      formField.append('couponCode', couponCode)
      formField.append('totalCost', totalCost)
      formField.append('delivery', delivery)
      formField.append('paymentMethod', paymentMethod)
  
    await axios.post( 'http://localhost:8000/products/', formField
    ).then((response) => {
      console.log(response.data);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Order summary
      </Typography>
      <Box component="form" id='address' name="add" onSubmit={OrderInfo}
            >
      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            {() => setItemQuantity(product.quantity)}
            {() => setItemName(product.name)}
            {() => setItemPrice(product.price)}
            <ListItemText primary={itemQuantity} secondary={itemName}  />
            <Typography variant="body2">{itemPrice}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Delivery Cost" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
         {() => setDeliveryCost(0.00)}
         {deliveryCost}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="VAT(18%)" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
           {setVat(0.00)}
           {vat}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Apply Coupon" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          <ApplyCouponAccordion />
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {setTotalCost(getCartTotal())}
                KES  {totalCost}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Delivery
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>Delivery Address as Provided in the previous form.</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          {/* <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid> */}
        </Grid>
      </Grid>
      </Box>
    </>
  );
}


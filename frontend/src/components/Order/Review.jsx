import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/Cart';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import ApplyCouponAccordion from '../checkout/ApplyCouponAccordion';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
    const { cartItems, getCartTotal } = useContext(CartContext);
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.quantity} secondary={product.name}  />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>

        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Delivery Cost" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            0.00
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="VAT(18%)" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
           0.00
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
                KES  {getCartTotal()}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}


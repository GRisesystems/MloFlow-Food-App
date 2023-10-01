import { Accordion, AccordionSummary, AccordionDetails,  Box, Button, Checkbox, FormControlLabel, Grid, Typography,  Stack, TextField} from '@mui/material';
import { useState } from 'react';
import axios from "axios";

export default function PaymentForm() {
  const [phone, setPhone] = useState('')

  const MpesaNumber = async (e) => {
    e.preventDefault();
    const formField = new FormData()

    formField.append('phone', phone)

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
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Box maxWidth={500}>
            <Accordion>
                <AccordionSummary >
                    <Typography sx={{ backgroundColor: '#0275d8',  color:'white', width:'fit-content', paddingX:3}} >VISA</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary >
                    <Typography sx={{ backgroundColor: 'green', color:'white', width:'fit-content', paddingX:3 }} >MPESA</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' sx={{ mt: 2, mb: 2 }}>
                        Please enter accurately  your MPESA number in the form  below.
                    </Typography>
                    <Box component="form" id='phone' name="add" onSubmit={MpesaNumber}
            >
                        <Stack direction="row" spacing={2}>
                            <TextField
                                margin="normal"                                
                                id="phone"
                                label="MPESA number"
                                name={phone}
                                autoFocus
                                onChange={(e) => {setPhone(e.target.value)}}
                                sx={{ 
                                    "& label.Mui-focused": {
                                        color: '#000',
                                    }, "& .MuiOutlinedInput-root": {
                                        "&.Mui-focused fieldset": {
                                            borderColor: '#000',
                                        }
                                    }
                                }}
                            />
                            <Button
                                
                                type="submit"                                
                                variant="contained"                                
                                sx={{ "&:hover": { backgroundColor: '#FFA000',} }}
                            >
                               Submit
                            </Button>
                        </Stack>
                        </Box>
                    <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="phone" value="yes" />}
            label="Remember my phone number for next time"
          />
        </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary >
                    <Typography sx={{ backgroundColor: '#0275d8', color:'white', width:'fit-content', paddingX:3 }} >PayPal</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' sx={{ mt: 2, mb: 2 }}>
                        Please enter accurately  your  PayPal Email in the form  below.
                    </Typography>
                    <form action="">
                        <Stack direction="row" spacing={2}>
                            <TextField
                                margin="normal"                                
                                id="coupon_code"
                                label="PayPal Account"
                                name="coupon_code"
                                autoFocus
                                sx={{ width:'50%',
                                    "& label.Mui-focused": {
                                        color: '#000',
                                    }, "& .MuiOutlinedInput-root": {
                                        "&.Mui-focused fieldset": {
                                            borderColor: '#000',
                                        }
                                    }
                                }}
                            />
                            <Button
                                disableElevation
                                type="submit"                                
                                variant="contained"                                
                                sx={{ "&:hover": { backgroundColor: '#FFA000',} }}
                            >
                               Submit
                            </Button>
                        </Stack>
                    </form>
                    <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="paypal" value="yes" />}
            label="Remember my PayPal account for next time"
          />
        </Grid>
                </AccordionDetails>
            </Accordion>

        </Box>

    </>
  );
}

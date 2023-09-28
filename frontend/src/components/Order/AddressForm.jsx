import { useState } from 'react';
import axios from "axios";
import {Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';


export default function AddressForm() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [town, setTown] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('')
  const [phone, setPhone] = useState('')

  const DeliveryAddress = async (e) => {
          e.preventDefault();
    const formField = new FormData()

    formField.append('firstName', firstName)
    formField.append('lastName', lastName)
    formField.append('address1', address1)
    formField.append('address2', address2)
    formField.append('town', town)
    formField.append('state', state)
    formField.append('zip', zip)
    formField.append('country', country)
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
            Delivery Address
          </Typography>
          <Box component="form" id='address' name="add" onSubmit={DeliveryAddress}
            >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name={firstName}
                defaultValue={firstName}
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={(e) => {setFirstName(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            required
            id="lastName"
            name={lastName}
            defaultValue={lastName}
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => {setLastName(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name={address1}
            defaultValue={address1}
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => {setAddress1(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name={address2}
            defaultValue={address2}
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={(e) => {setAddress2(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="town"
            name={town}
            defaultValue={town}
            label="City/Town"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e) => {setTown(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name={state}
            defaultValue={state}
            label="State/Province/Region/County"
            fullWidth
            variant="standard"
            onChange={(e) => {setState(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name={zip}
            defaultValue={zip}
            label="Zip / Postal code"
            fullWidth
            autoComplete="Delivery postal-code"
            variant="standard"
            onChange={(e) => {setZip(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name={country}
            defaultValue={country}
            label="Country"
            fullWidth
            autoComplete="Delivery country"
            variant="standard"
            onChange={(e) => {setCountry(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="phone"
            name={phone}
            defaultValue={phone}
            label="Phone Number"
            fullWidth
            autoComplete="Phone number "
            variant="standard"
            onChange={(e) => {setPhone(e.target.value)}}
          />
          </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
  <Button variant="contained" type="submit" sx={{backgroundColor:'#FBB31D', color:'#0C0B0B', m:3}} >Submit</Button>
      </Grid>
      </Box>
    </>
  );
}



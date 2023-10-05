import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import axios from 'axios';

const BookNowForm = ({ open, onClose, accessToken }) => {
  const { control, handleSubmit, formState, reset } = useForm();
  const [dialogOpen, setDialogOpen] = useState(false); // State for the dialog
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [occasionPrice, setOccasionPrice] = useState(0);

  const occasionOptions = [
    { value: 'Wedding', price: 5000 }, // Assign prices to occasions
    { value: 'Birthday', price: 3000 },
    { value: 'Dinner', price: 2000 },
    { value: 'Anniversary', price: 4000 },
    { value: 'Baby Shower', price: 2500 },
  ];

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const onSubmit = async (data) => {
    try {
      const emailData = {
        ...data,
        email: data.email,
        occasion: selectedOccasion, // Include the selected occasion in the data
      };
      const response = await axios.post(
        'http://127.0.0.1:8000/customer/chef-bookings/',
        emailData
      );
      console.log('Form submitted:', emailData);
      console.log('Server response:', response.data);

      // Reset the form after successful submission
      reset();

      setDialogOpen(true); // Open the dialog after request is submitted
    } catch (error) {
      console.error('Form submission error:', error);
      // Display error message to the user
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleDialogClose = () => {
    setDialogOpen(false); // Close the dialog
    onClose(); // Close the main dialog as well if needed
  };

  const showAlertDialog = () => {
    // Using the browser's alert function to display the message
    alert('Request received. We will contact you regarding your booking.');
    handleDialogClose(); // Close the dialog after alert is shown
  };

  const handleRequestClick = async () => {
    try {
      await handleSubmit(onSubmit)();
      showAlertDialog(); // This will show the alert
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleOccasionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOccasion(selectedValue);

    // Find the price of the selected occasion
    const selectedOption = occasionOptions.find((option) => option.value === selectedValue);
    if (selectedOption) {
      setOccasionPrice(selectedOption.price);
    } else {
      setOccasionPrice(0);
    }
  };
  const [numberOfGuests, setNumberOfGuests] = useState(0); // State for the number of guests
  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

  return (
    <>
    <Dialog open={open} onClose={handleClose}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Request Form</h2>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            gap: '20px',
            width: '450px', // Set the desired width here
          }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
        <Controller
          name="first_name"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              {...field}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error ? 'This field is required' : ''}
            />
          )}
        />

        <Controller
          name="surname"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              label="Surname"
              variant="outlined"
              fullWidth
              {...field}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error ? 'This field is required' : ''}
            />
          )}
        />
        <Controller
  name="email" // Field name
  control={control}
  defaultValue=""
  rules={{
    required: true, // Add any validation rules you need
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Example email validation pattern
      message: 'Invalid email address',
    },
  }}
  render={({ field, fieldState }) => (
    <TextField
      label="Email"
      variant="outlined"
      fullWidth
      {...field}
      error={Boolean(fieldState.error)}
      helperText={fieldState.error ? fieldState.error.message : ''}
    />
  )}
/>
        

        <Controller
          name="specialty"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              label="chefSpeciality"
              variant="outlined"
              fullWidth
              {...field}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error ? 'This field is required' : ''}
            />
          )}
        />

           <Controller
          name="location"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              label="location"
              variant="outlined"
              fullWidth
              {...field}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error ? 'This field is required' : ''}
            />
          )}
        />

        {/* Occasion Dropdown */}
        <InputLabel sx={{ mt: 2 }}>Occasion</InputLabel>
          <Select
            label="occasion"
            variant="outlined"
            fullWidth
            value={selectedOccasion}
            onChange={handleOccasionChange}
          >
            {occasionOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
          <Controller
            name="noOfGuests"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Number of Guests"
                variant="outlined"
                fullWidth
                type="number"
                {...field}
              />
            )}
          />

         {/* Date Range Input */}
         <div>
            <InputLabel sx={{ mt: 2 }}>Date Range</InputLabel>
            <div style={{ display: 'flex', gap: '30px', width:'2000px' }}>
              <Controller
                name="start_date"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    label="From"
                    variant="outlined"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...field}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? 'This field is required' : ''}
                  />
                )}
              />
              <Controller
                name="end_date"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    label="To"
                    variant="outlined"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...field}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? 'This field is required' : ''}
                  />
                )}
              />
            </div>
          </div>

          {/* <InputLabel sx={{ mt: 2 }}>Phone Number</InputLabel>
                <Controller
                    control={control}
                    rules={{
                        validate: matchIsValidTel
                    }}

                    render={({ field, fieldState }) => (
                        <MuiTelInput
                            fullWidth
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            defaultCountry="KE"
                            helperText={fieldState.invalid ? "Tel is invalid" : ""}
                            error={fieldState.invalid}
                        />
                    )}
                    name="phone"
                /> */}
                <section>
                 <p style={{ fontSize: '24px', fontWeight: 'bolder', color: 'black', textAlign: 'center', marginBottom: '0px',marginTop: '0px' }}>
                          Total Price: 
                     </p>
                     <p style={{ fontSize: '24px', fontWeight: 'bolder', color: 'black', textAlign: 'center', marginBottom: '0px' }}>
                           Ksh. {occasionPrice}
                     </p>
                     </section>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>                       

          <DialogActions>
            <Button
              type="submit"
              onClick={handleRequestClick}
              disabled={formState.isSubmitting}
              sx={{
                backgroundColor: '#FFB31D',
                color: 'black',
                width: '450px',
                height: '40px',
                alignSelf: 'center',
                marginTop: '0px'
              }}
            >
              Request
            </Button>        
            </DialogActions>
          </div>         
        </Box>
      </Dialog>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogContent>
          <DialogContentText>
            Request received. A notification will be sent to your email.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={showAlertDialog}>Close</Button>
        </DialogActions>
      </Dialog>
      
    </>
  );
};

export default BookNowForm;

import { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  InputLabel,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import axios from 'axios';


const BookNowForm = ({ open, onClose }) => {
  const { control, handleSubmit, formState } = useForm();
  // const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false); // State for the dialog
 const config = {
  headers: {
    Authorization: `Bearer $(accessToken)`,
  },
 };
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/customer/chef-bookings/', data);
      console.log('Form submitted:', data);
      console.log('Server response:', response.data);
      setDialogOpen(true); // Open the dialog after request is submitted
    } catch (error) {
      console.error('Form submission error:', error);
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
            width: '600px', // Set the desired width here
          }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
        <Controller
          name="firstName"
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
          name="specialty"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              label="Specialty"
              variant="outlined"
              fullWidth
              {...field}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error ? 'This field is required' : ''}
            />
          )}
        />

        <Controller
          name="occasion"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              label="Occasion"
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
              label="Location"
              variant="outlined"
              fullWidth
              {...field}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error ? 'This field is required' : ''}
            />
          )}
        />

         {/* Date Range Input */}
         <div>
            <InputLabel sx={{ mt: 2 }}>Date Range</InputLabel>
            <div style={{ display: 'flex', gap: '30px', width:'2000px' }}>
              <Controller
                name="fromDate"
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
                name="toDate"
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

          <InputLabel sx={{ mt: 2 }}>Phone Number</InputLabel>
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
                />
          
        

          <DialogActions>
          <Button
            type="submit"
            onClick={handleRequestClick} 
            disabled={formState.isSubmitting}
            sx={{
              backgroundColor: '#FFB31D',
              color: 'black',
              width: '100%',
              alignSelf: 'center',
             
            }}
          >
            Request
          </Button>
        </DialogActions>
        </Box>
      </Dialog>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogContent>
          <DialogContentText>
            Request received. A notification will be sent to your email.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button >Close</Button>
          onClick={showAlertDialog}
        </DialogActions>
        
      </Dialog>
      
    </>
    
    
  );
};

export default BookNowForm;
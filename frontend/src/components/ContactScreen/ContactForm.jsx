import { Box, Button, Grid, InputLabel, TextField, Typography } from '@mui/material';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { Controller, useForm } from 'react-hook-form';
// import { BASE_URL } from "../signin/constants";

import axios from 'axios';


// import CountryList from 'react-select-country-list';



const ContactForm = () => {
  // const theme = useTheme()

  const { control,  handleSubmit, formState: { errors } } = useForm({

  });
  

  const onSubmit = async (data, { reset }) => {
     
    try {
      // Make an HTTP POST request to the backend endpoint
      const response = await axios.post('http://127.0.0.1:8000/conversation/contact-us/', data);
  
      // Check if the request was successful (you can add more error handling)
      if (response.status === 201) {
        console.log('Form submitted successfully');
        // Clear the form by resetting it
        // reset();
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form', error);
    }
  };

  const MAX_WORD_COUNT = 200; // Define the maximum word count

  const calculateWordCount = (text) => {
    if (!text) return 0; // Return 0 if text is undefined or empty
    const words = text.split(/\s+/); // Split text by spaces to count words
    return words.length;
  };


  return (
    <Box sx={{ m: 6 , l: 0}}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Contact Form</Typography>
      <Box

        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <label>First Name <span style={{color:'red'}}>*</span></label>
            <Controller
              name="first_name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField {...field}   variant="outlined" fullWidth error={!!errors.first_name} />
              )}
            />
            {errors.first_name && <span>This field is required</span>}
          </Grid>

          <Grid item xs={12} sm={6} >
            <label>Last Name <span style={{color:'red'}}>*</span></label>
            <Controller
              name="surname"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField  {...field}  variant="outlined" fullWidth error={!!errors.first_name} />
              )}
            />
            {errors.last_name && <span>This field is required</span>}
          </Grid>
        </Grid>

           

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
                    name="phone_number"
                />

        <Box sx={{ mt: 2 }}>
          <label>Email <span style={{color:'red'}}>*</span></label>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField  {...field} variant="outlined" fullWidth error={!!errors.email} />
            )}
          />
          {errors.email && <span>This field is required</span>}
        </Box>
        <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          Write to us
        </Typography>
        <Box sx={{ mt: 2 }}>
        <Controller
  name="message"
  control={control}
  rules={{ required: false }}
  render={({ field }) => {
    const fieldValue = field.value; // Capture the field value here
    return (
      <div>
        <TextField
          {...field}
          label="Send a Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          onChange={(e) => {
            const text = e.target.value;
            const wordCount = calculateWordCount(text);
            if (wordCount <= MAX_WORD_COUNT) {
              field.onChange(text);
            }
          }}
        />
        <Typography variant="caption" sx={{ mt: 1, color: 'text.secondary' }}>
          Word count: {calculateWordCount(fieldValue)} / {MAX_WORD_COUNT}
        </Typography>
      </div>
    );
  }}
/>  
<Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: '#fbb31d', color: 'black', marginTop: '16px', width: '570px'}}
            >
              Submit
            </Button>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default ContactForm;
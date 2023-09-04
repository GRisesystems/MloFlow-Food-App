import { Box, Grid, MenuItem, Select, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Controller, useForm } from 'react-hook-form'
import { Flag } from 'react-world-flags';
import CountryList from 'react-select-country-list';



const ContactForm = () => {
  const theme = useTheme()


  type FormData = {
    first_name: string;
    last_name: string;
    phone_number: string;
    email_address: string;
    message: string;
  };
  const { control, register, handleSubmit, formState: { errors }, watch } = useForm({

  });

  const onSubmit = async (data: any) => {
    console.log(data)
  };

  const countryData = CountryList().getData();


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
              name="last_name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField  {...field}  variant="outlined" fullWidth error={!!errors.first_name} />
              )}
            />
            {errors.last_name && <span>This field is required</span>}
          </Grid>
        </Grid>

           

        <Box sx={{ mt: 2 }}>
          <label>Phone <span style={{color:'red'}}>*</span></label>
          <Controller
            name="phone_number"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField  {...field}  variant="outlined" fullWidth error={!!errors.phone_number} />
            )}
          />
          {errors.phone_number && <span>This field is required</span>}
        </Box>

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
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Write to us</Typography>
          <Box sx={{ mt: 2 }}>
            <Controller
              name="message"
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Send a Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                />
              )}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactForm
import { Box, Grid, MenuItem, Select, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Controller, useForm } from 'react-hook-form'
import { Flag } from 'react-world-flags';
import CountryList from 'react-select-country-list';



const CheckOutBilingDetailsForm = () => {
  const theme = useTheme()


  type FormData = {
    first_name: string;
    last_name: string;
    company_name: string;
    country: string;
    street_address: string;
    apartment: string;
    town: string;
    county: string;
    post_code: string;
    phone_number: string;
    email_address: string;
    additional_information: string;
  };
  const { control, register, handleSubmit, formState: { errors }, watch } = useForm({

  });

  const onSubmit = async (data: any) => {
    console.log(data)
  };

  const countryData = CountryList().getData();


  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Billing Details</Typography>
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
          <label>Company Name (Optional)</label>
          <Controller
            name="company_name"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField {...field} variant="outlined" fullWidth />
            )}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <label>Country <span style={{color:'red'}}>*</span></label>
          <Controller
            name="country"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} variant="outlined" fullWidth error={!!errors.country}>
                {countryData.map((country: { code: string; label: string }) => (
                  <MenuItem key={country.label} value={country.code}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.country && <span>This field is required</span>}
        </Box>

        <Box sx={{ mt: 2 }}>
          <label>Street address <span style={{color:'red'}}>*</span></label>
          <Controller
            name="street_address"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField  {...field} placeholder='House Number and street name'  variant="outlined" fullWidth error={!!errors.street_address} />
            )}
          />
          {errors.street_address && <span>This field is required</span>}
        </Box>

        <Box sx={{ mt: 2 }}>
          <Controller
            name="apartment"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField  {...field} label="Apartment, suite, Unit, etc (optional)" variant="outlined" fullWidth />
            )}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <label>Town/City <span style={{color:'red'}}>*</span></label>
          <Controller
            name="town"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField  {...field}  variant="outlined" fullWidth error={!!errors.town} />
            )}
          />
          {errors.town && <span>This field is required</span>}
        </Box>

        <Box sx={{ mt: 2 }}>
          <label>County (Optional) </label>
          <Controller
            name="county"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField  {...field}  variant="outlined" fullWidth />
            )}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <label>Post Code <span style={{color:'red'}}>*</span></label>
          <Controller
            name="post_code"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField  {...field}  variant="outlined" fullWidth error={!!errors.post_code} />
            )}
          />
          {errors.post_code && <span>This field is required</span>}
        </Box>

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
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Additional Information</Typography>
          <Box sx={{ mt: 2 }}>
            <Controller
              name="additional_information"
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Notes about your order (Optional)"
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

export default CheckOutBilingDetailsForm
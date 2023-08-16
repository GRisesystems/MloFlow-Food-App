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
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Billing Address</Typography>
      <Box

        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="first_name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField {...field} label="First Name" variant="outlined" fullWidth error={!!errors.first_name} />
              )}
            />
            {errors.first_name && <span>This field is required</span>}
          </Grid>

          <Grid item xs={12} sm={6} >
            <Controller
              name="last_name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField  {...field} label="Last Name" variant="outlined" fullWidth error={!!errors.first_name} />
              )}
            />
            {errors.last_name && <span>This field is required</span>}
          </Grid>
        </Grid>

        <Box sx={{ mt: 2 }}>
          <Controller
            name="company_name"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField {...field} label="Company Name (Optional)" variant="outlined" fullWidth />
            )}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Controller
            name="country"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} label="Country" variant="outlined" fullWidth error={!!errors.country}>
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
          <Controller
            name="street_address"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField  {...field} label="Street address" variant="outlined" fullWidth error={!!errors.street_address} />
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
          <Controller
            name="town"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField  {...field} label="Town/City" variant="outlined" fullWidth error={!!errors.town} />
            )}
          />
          {errors.town && <span>This field is required</span>}
        </Box>

        <Box sx={{ mt: 2 }}>
          <Controller
            name="county"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField  {...field} label="County (Optional)" variant="outlined" fullWidth />
            )}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Controller
            name="post_code"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField  {...field} label="Post Code" variant="outlined" fullWidth error={!!errors.post_code} />
            )}
          />
          {errors.post_code && <span>This field is required</span>}
        </Box>

        <Box sx={{ mt: 2 }}>
          <Controller
            name="phone_number"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField  {...field} label="Phone *" variant="outlined" fullWidth error={!!errors.phone_number} />
            )}
          />
          {errors.phone_number && <span>This field is required</span>}
        </Box>

        <Box sx={{ mt: 2 }}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField  {...field} label="Email *" variant="outlined" fullWidth error={!!errors.email} />
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
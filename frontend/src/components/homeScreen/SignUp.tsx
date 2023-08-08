import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Checkbox,
  Button,
  TextField,
  Container,
  Paper,
  Typography,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import PhoneNumber from "mui-tel-input"; // Import the PhoneInput component

type FormData = {
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: string;
  homeAddress: string;
  country: string;
  agreeToTerms: boolean;
};

const App: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create an Account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField {...field} label="First Name" variant="outlined" fullWidth error={!!errors.firstName} />
                )}
              />
              {errors.firstName && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="surname"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField {...field} label="Surname" variant="outlined" fullWidth error={!!errors.surname} />
                )}
              />
              {errors.surname && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                rules={{ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? "This field is required and should be a valid email" : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="country"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field} label="Country" variant="outlined" fullWidth error={!!errors.country}>
                    <MenuItem value="US">United States (+1)</MenuItem>
                    <MenuItem value="GB">United Kingdom (+44)</MenuItem>
                    {/* Add more countries as needed */}
                  </Select>
                )}
              />
              {errors.country && <span>This field is required</span>}
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <PhoneNumber
                    {...field}
                    defaultCountry="us" // Set the default country here
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    error={!!errors.phoneNumber}
                  />
                )}
              />
              {errors.phoneNumber && <span>This field is required</span>}
            </Grid>
            {/* Agreement checkbox and submit button... */}
            <Grid item xs={12}>
              <Controller
                name="homeAddress"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField {...field} label="Home Address" variant="outlined" fullWidth error={!!errors.homeAddress} />
                )}
              />
              {errors.homeAddress && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="agreeToTerms"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...field} />
                    <span>
                      I agree to the <a href="#">terms and conditions</a>
                    </span>
                  </div>
                )}
              />
              {errors.agreeToTerms && <span>You must agree to the terms and conditions</span>}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Create Account
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default App;
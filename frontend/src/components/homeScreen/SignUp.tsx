// import "mui-tel-input/dist/index.css";
import React, {useState} from "react";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Button, TextField, Container, Paper, Typography, Grid, IconButton, InputAdornment } from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";




type FormData = {
  firstName: string;
  surname: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  homeAddress: string;
  username: string;
  password: string;
  agreeToTerms: boolean;
  confirmPassword: string;
};

const App: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    mode: "onChange", // Enable real-time validation
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const onSubmit = (data: FormData) => {
    const isPhoneNumberValid = matchIsValidTel(data.phoneNumber);
    console.log("Is phone number valid:", isPhoneNumberValid);
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
            
            <Grid item xs={12}>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <MuiTelInput
                    {...field}
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    defaultCountry="KE" // Set Kenya as the default country
                    error={!!errors.phoneNumber}
                  />
                )}
              />
              {errors.phoneNumber && <span>This field is required</span>}
            </Grid>
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
                name="username"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField {...field} label="Username" variant="outlined" fullWidth error={!!errors.username} />
                )}
              />
              {errors.username && <span>This field is required</span>}
            </Grid>

            <Grid container spacing={2}>
            {/* ... other fields */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    error={!!errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility}>
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              {errors.password && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type={showConfirmPassword ? "text" : "password"}
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    error={!!errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              {errors.password && <span>This field is required</span>}
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
            <Controller
                name="agreeToTerms"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <div style={{ display: "flex", alignItems: "center" ,marginLeft: 40, marginTop:20}}>
                   
                    <span>
                      Already have an account?<a href="#">Sign in</a>
                    </span>
                  </div>
                )}
              />
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Create Account
              </Button>
            </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default App;

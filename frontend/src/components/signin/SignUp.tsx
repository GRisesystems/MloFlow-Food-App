// import "mui-tel-input/dist/index.css";
import React, {useState} from "react";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Button, TextField, Container, Paper, Typography, Grid, IconButton, InputAdornment } from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import {BASE_URL} from './constants'







type FormData = {
  first_name: string;
  surname: string;
  email: string;
  countryCode: string;
  phone: string;
  home_address: string;
  username: string;
  password: string;
  re_password: string;
  agreeToTerms: boolean;
  confirmPassword: string;
};

const App: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const methods = useForm<FormData>();
  const {
    control,
    handleSubmit,
    setError, // Import setError from useForm
    formState: { errors },
  } = methods;
  const navigate = useNavigate()

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const onSubmit = async (data: FormData) => {
    console.log(data)
    await axios.post(`${BASE_URL}/auth/users/`, data).then(function (response) {
        console.log(response.status);
        if (response.status === 201) {
            setSuccessMessage('Successfully registered. You can now login.');  
            navigate('/login')             
            
        } else {                
            setErrorMessage('Registration Failed');
        }
    }).catch(function (error) {
        console.log(error);
        setErrorMessage('Registration Failed');
    });

};

// const history = useHistory();


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
                name="first_name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField {...field} label="First Name" variant="outlined" fullWidth error={!!errors.first_name} />
                )}
              />
              {errors.first_name && <span>This field is required</span>}
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
                name="phone"
                control={control}
                rules={{ required: true, minLength:10 }}
                render={({ field }) => (
                  <MuiTelInput
                    {...field}
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    defaultCountry="KE"
                    error={!!errors.phone}
                    helperText={
                      errors.phone
                        ? "This field is required and should be a valid phone number"
                        : ""
                    }
                    onBlur={(e) => {
                      const isValid = matchIsValidTel(e.target.value);
                      if (!isValid) {
                        setError("phone", { // Use setError here
                          type: "manual",
                          message: "Invalid phone number",
                        });
                      }
                    }}
                  />
                )}
              />
              {errors.phone && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12} sx={{mb:2}}>
              <Controller
                name="home_address"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField {...field} label="Home Address" variant="outlined" fullWidth error={!!errors.home_address} />
                )}
              />
              {errors.home_address && <span>This field is required</span>}
            </Grid>

            <Grid container spacing={2}>
            {/* ... other fields */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="password"
                control={control}
                rules={{ required: true, minLength:8 }}
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
                name="re_password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type={showConfirmPassword ? "text" : "password"}
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    error={!!errors.re_password}
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
              {errors.re_password && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
  <Controller
    name="agreeToTerms"
    control={control}
    rules={{ required: true }}
    render={({ field }) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox {...field} style={{color:"black"}}/>
        <span>
          I agree to the <a href="#" style={{ color: "#FFA000" }}>terms and conditions</a>
        </span>
      </div>
    )}
  />
  {errors.agreeToTerms && <span style={{ color: "#FFA000" }}>You must agree to the terms and conditions</span>}
</Grid>


            <Controller
                name="agreeToTerms"
                control={control}
                rules={{ required: true }}
                render={({  }) => (
                  <div style={{ display: "flex", alignItems: "center" ,marginLeft: 40, marginTop:20}}>
                   
                   
                    
                  </div>
                )}
              />
            <Grid item xs={12}>
            <Button
  type="submit"
  variant="contained"
  color="primary"
  fullWidth
  style={{ backgroundColor: "#FFA000", color: "white" }}
>
  Create Account
</Button>

            </Grid>
            </Grid>
          </Grid>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </Paper>
    </Container>
  );
};

export default App;

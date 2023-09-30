import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Controller, useForm } from "react-hook-form";
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ForgotPasswordForm = () => {
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { control, register, handleSubmit, formState: { errors }, watch } = useForm({});

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const password = watch("password");

  const verifyAccount = () => {
    console.log(otp)
  };

  const clearOtp = () => {
    setOtp('');
  };
  const onSubmit = (data) => {

  }
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 1,
        mx: 'auto',
        width: '80%',
        boxShadow: 2,
        p: 2
      }}
    >
      <Box component="form" noValidate autoComplete="off"
        onSubmit={
          handleSubmit(onSubmit)
        }
      >
        <Typography variant='h5' sx={{textAlign:'center', fontWeight:'bold'}}>Reset Password</Typography>
        <InputLabel sx={{ mt: 2, color: 'black' }}>Enter otp</InputLabel>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: '50px',
            height: '50px',
            fontSize: '24px',
            margin: '4px',
            borderRadius: '8px',
            border: '1px solid black',
          }}
        />
        <Box sx={{ mt: 2 }}>
          <InputLabel sx={{ color: 'black' }}>New password</InputLabel>
          <TextField
            id="standard-password-input"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            autoComplete="new-password"
            variant="outlined"
            {...register('password', { required: true })}
            error={Boolean(errors.password)}
            helperText={errors.password ? 'Password is required.' : ''}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <InputLabel sx={{ color: 'black' }}>Confirm new password</InputLabel>
          <TextField
            id="standard-password-confirm"
            type={showConfirmPassword ? 'text' : 'password'}
            fullWidth
            autoComplete="new-password"
            variant="outlined"
            {...register('password_confirm', {
              required: true,
              validate: (value) =>
                value === watch('password') || 'Passwords do not match',
            })}
            error={Boolean(errors.password_confirm)}
            helperText={
              errors.password_confirm
                ? errors.password_confirm.message
                : '' // No error message
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ mt: 2, float: 'right' }}
          // sx={{ mt: 3, width: '100%', backgroundColor: agreeToTerms ? '#FFA000' : 'grey', color: 'white' }}
          type="submit"
        >
          Reset password
        </Button>
      </Box>
    </Box>
  )
}

export default ForgotPasswordForm
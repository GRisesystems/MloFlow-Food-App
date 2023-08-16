import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import {BASE_URL} from './constants'



const defaultTheme = createTheme();
const SignIn = () => {
  const[errorMessage,setErrorMessage] = React.useState('')
  console.log(errorMessage)
  const navigate = useNavigate()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log('hello')
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    await axios.post(`${BASE_URL}/auth/jwt/create/`, data).then(function (response) {      
      if (response.status === 200) {
          const { access, refresh } = response.data;
          localStorage.setItem('accessToken', access);
          localStorage.setItem('refreshToken', refresh);
          navigate('/chefs')
          window.location.reload();

      } else {
        
          setErrorMessage('Invalid phone number or password');
      }
  }).catch(function (error) {
    console.log(error)
    
      // setErrorMessage('Invalid phone number or password');
  });
  };

  return (
  <ThemeProvider theme={defaultTheme}>
   <Container component="main" maxWidth="sm">
      <Paper elevation={2} style={{ padding: "1rem" }}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <Avatar alt="MloFlow Logo" src="/src/assets/mloflowlogo.jfif" sx={{width:'150px', height:'150px'}}  />
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ "& label.Mui-focused": {
                color: '#000',  },"& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: '#000',
                  }
                }}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
               sx={{ "& label.Mui-focused": {
                color: '#000',  },"& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: '#000',
                  }
                }}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // onClick={handleClear}
              sx={{ mt: 3, mb: 2, backgroundColor: '#FFA000', "&:hover": {color: 'black', backgroundColor: '#FFA000',}, }}
            >
              Sign In
            </Button>
            
            <Grid container>
            <Grid item xs={6} sx={{ display: 'flex-start', justifyContent: 'flex-end' }}>
  <FormControlLabel
    control={
      <Checkbox
        value="remember"
        sx={{
          "&.Mui-checked": {
            color: 'black',
          },
          "&:hover": {
            color: '#FFA000',
          },
        }}
      />
    }
    label="Remember me"
    sx={{ color: 'black', ml: 0 }}
  />
</Grid>



  <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
    <Link
      href="/reset_password"
      variant="body2"
      sx={{
        color: '#000',
        fontSize: '.9rem',
        fontWeight: 600,
        textDecoration: 'none',
        "&:hover": { color: '#FFA000', textDecoration: 'underline' },
        mt:1,
        ml:12,
      }}
    >
      Forgot password?
    </Link>
  </Grid>
</Grid>

          </Box>
        </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};
export default SignIn;
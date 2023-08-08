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


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
 const SignIn = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <Avatar alt="MloFlow Logo" src="/src/assets/mloflowlogo.jfif"  />
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // onClick={handleClear}
              sx={{ mt: 3, mb: 2, backgroundColor: '#FFA000', "&:hover": {color: '#FFA000', backgroundColor: '#000',}, }}
            >
              Sign In
            </Button>
            <FormControlLabel
              control={<Checkbox value="remember" sx={{color:'#FFA000', "&:hover": {color: '#FFA000',}}}/>}
              label="Remember me"
              sx={{color:'#FFA000'}}
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{color: '#000', fontSize:'.9rem', fontWeight:600, textDecoration:'none',  "&:hover": {color: '#FFA000', textDecoration:'underline',  }}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" sx={{color: '#000', fontSize:'.9rem', fontWeight:600, textDecoration:'none',  "&:hover": {color: '#FFA000', textDecoration:'underline',  }}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default SignIn;
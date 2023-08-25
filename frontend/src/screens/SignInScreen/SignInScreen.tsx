import { useState } from 'react';
import SignUp from '../../components/signin/SignUp';
import LoginForm from '../../components/signin/LoginForm';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import SignUpForm from '../../components/signin/SignUpForm';

const SignInScreen = () => {
  const theme = useTheme()
  const [showSignUp, setShowSignUp] = useState(false);
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const buttonStyle = {
    backgroundColor: showSignUp ? '#FFA000' : '#FFA000', "&:hover": { color: 'black', backgroundColor: '#FFA000' },
    color: 'black',

    fontSize: '20px',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const handleMouseEnter = (e: any) => {
    e.currentTarget.style.color = 'black';
    e.currentTarget.style.backgroundColor = '#FFA000';
  };

  const handleMouseLeave = (e: any) => {
    e.currentTarget.style.color = 'black';
    e.currentTarget.style.backgroundColor = showSignUp ? '#FFA000' : '#FFA000';
  };

  return (
    <>
      <CssBaseline />
      <Container>
        {isMobileView ? (
          <Grid item xs={12} md={5}>
            <Box>
              {showSignUp ? <SignUp /> : <LoginForm />}
            </Box>
          </Grid>
        ):(
          <Grid container spacing={2}>
          <Grid item xs={12} md={7} sx={{mt:4}}>
            <Box sx={{ flex: 1, padding: '50px', backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center',mt:3 }}>
              <Typography sx={{mt:3,fontSize: '65px'}}>
                {showSignUp ? 'Already have an account?' : "Don't have an account yet?"}
              </Typography>
              <button
                onClick={toggleSignUp}
                style={{ ...buttonStyle, width: '100%', marginBottom: '20px' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {showSignUp ? 'Sign In' : 'Create Account'}
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
            {showSignUp ? <SignUpForm /> : <LoginForm />}
            {/* {showSignUp ? <SignUp /> : <LoginForm />} */}
            </Box>
          </Grid>
        </Grid> 
        )}             
      </Container>
    </>
  );
};


export default SignInScreen;

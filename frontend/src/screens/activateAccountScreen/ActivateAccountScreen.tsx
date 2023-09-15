import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Box, Button, Typography } from '@mui/material';

const ActivateAccountScreen = () => {
  const [otp, setOtp] = useState('');

  const verifyAccount = () => {
    console.log(otp)
  };

  const clearOtp = () => {
    setOtp('');
  };

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 1,
        mx: 'auto',
        width: '80%',
        boxShadow: 2
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant='h6' sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>Enter Account activation number</Typography>
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
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          onClick={clearOtp}
          disabled={otp === ''}
          sx={{ marginTop: '16px' }}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={verifyAccount}
          disabled={otp.length !== 6}
          sx={{ marginTop: '16px', ml: 2 }}
        >
          Activate
        </Button>
      </Box>
    </Box>
  );
};

export default ActivateAccountScreen;

import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Box, Button, Typography, Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { BASE_URL } from '../../components/signin/constants';
import { useData } from '../../Context/DataContext';

const ActivateAccountScreen = () => {
  const [otp, setOtp] = useState('');
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()
  const { data } = useData();
  

  const verifyAccount = async () => {
    const otp_data = { otp,email:data }    
    try {
      const response = await axios.post(`${BASE_URL}/authapp/verify-otp/`, otp_data)
      if (response.status === 200) {
        navigate('/sign-in')
      }
    } catch (error) {
      setShowAlert(!showAlert)
    }

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
        {showAlert &&
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Check yout otp or contact support for help
          </Alert>
        }
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
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
          disabled={otp.length !== 4}
          sx={{ marginTop: '16px', ml: 2 }}
        >
          Activate
        </Button>
      </Box>
    </Box>
  );
};

export default ActivateAccountScreen;

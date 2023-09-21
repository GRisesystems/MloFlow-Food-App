import { useState, useContext } from 'react';
import OtpInput from 'react-otp-input';
import { Box, Button, Typography, Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import axios from 'axios';
import { BASE_URL } from '../../components/signin/constants';
import { ActivationContext } from '../../utils/ActivationContext'
import ActivateAccountForm from '../../components/activateAccount/ActivateAccountForm'
import { grey } from '@mui/material/colors';


const ActivateAccountScreen = () => {
  const [otp, setOtp] = useState('');
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()
  const { activationEmail } = useContext(ActivationContext);
  const [showRegenerateOtpBtn, setShowRegenerateOtpBtn] = useState(false)
  const [open, setOpen] = useState(false); const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };





  const verifyAccount = async () => {
    const otp_data = { otp, email: activationEmail }
    try {
      const response = await axios.post(`${BASE_URL}/authapp/verify-otp/`, otp_data)
      if (response.status === 200) {
        navigate('/sign-in')
      }
    } catch (error) {
      setShowAlert(!showAlert)
      setShowRegenerateOtpBtn(!showRegenerateOtpBtn)
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
        {showRegenerateOtpBtn ?
          <Button
            variant="contained"
            color='primary'
            onClick={handleClickOpen}
            sx={{ marginTop: '16px', ml: 2, textTransform: 'none' }}
          >
            Regenerate otp
          </Button>
          :
          <Button
            variant="contained"
            color="success"
            onClick={verifyAccount}
            disabled={otp.length !== 4}
            sx={{ marginTop: '16px', ml: 2 }}
          >
            Activate
          </Button>
        }
        <Dialog
          maxWidth="xs"
          open={open}
          onClose={handleClose}
          fullWidth
        >
          <DialogTitle sx={{textAlign:'center', borderBottom:1,borderColor:grey[500]}}>Regenerate OTP</DialogTitle>
          <DialogContent>
            <ActivateAccountForm onClose={handleClose}/>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ActivateAccountScreen
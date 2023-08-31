import React, { useState } from 'react';
import { Box, Button, FormControl, InputAdornment, MenuItem, Select, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { BASE_URL } from './constants';

const BookNowForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { control, handleSubmit, formState: { errors }, watch } = useForm({});

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const onSubmit = async (data) => {
    // Handle form submission
    console.log('Form submitted:', data);
  };

  const password = watch('password');

  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [occasion, setOccasion] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('Kenya'); // Default value is Kenya

  return (
    <Box sx={{ mt: 3 }}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" align="center" gutterBottom>
          Book Now Form
        </Typography>

        {/* Form fields */}
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Surname:
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </label>
        <br />
        <label>
          Specialty:
          <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
        </label>
        <br />
        <label>
          Occasion:
          <input type="text" value={occasion} onChange={(e) => setOccasion(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Request</button>
      </form>
    </Box>
  );
};

export default BookNowForm;

import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Controller, useForm } from "react-hook-form";
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import axios from 'axios';
import RegisterAlert from './RegisterAlert';
import { BASE_URL } from './constants'
import { ActivationContext } from '../../utils/ActivationContext'
import { useNavigate } from 'react-router';
import { useContext } from 'react';




const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const [showRegisterSuccessModal, setShowRegisterSuccessModal] = useState(false)
    const { control, register, handleSubmit, formState: { errors }, watch } = useForm({});
    const navigate = useNavigate()
    const { setActivationEmail } = useContext(ActivationContext);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };


    const onSubmit = async (data) => {
        data.re_password = data.password_confirm;
        delete data.password_confirm;

        try {
            const response = await axios.post(`${BASE_URL}/authapp/register/`, data);


            if (response.status === 201) {
                setSuccessMessage('Successfully Created an Account. Check your email for Account Activation details');
                setShowRegisterSuccessModal(!showRegisterSuccessModal)
                setActivationEmail(data.email);
                navigate('/activate')

            } else {
                setErrorMessage('Registration Failed');
            }
        } catch (error) {
            // console.log(error);
            setErrorMessage('Registration Failed');
        }
    };

    return (
        <Box sx={{ boxShadow: 3, mt: 3 }}>



            <Box
                component="form"
                noValidate
                autoComplete="off"
                p={2}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography variant="h5" align="center" gutterBottom>
                    Create an Account
                </Typography>
                {errorMessage && <Typography color='error' align="center">{errorMessage}</Typography>}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                        <InputLabel>First Name</InputLabel>
                        <TextField
                            type="text"
                            fullWidth
                            {...register("first_name", {
                                required: true,
                            })}
                            error={Boolean(errors.first_name)}
                            helperText={errors.first_name ? "First name is required." : ""}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ mt: 2 }}>Surname</InputLabel>
                        <TextField
                            type="text"
                            fullWidth
                            {...register("surname", {
                                required: true,
                            })}
                            error={Boolean(errors.surname)}
                            helperText={errors.surname ? "Surname is required." : ""}
                        />
                    </Grid>
                </Grid>
                <InputLabel sx={{ mt: 2 }}>Email</InputLabel>
                <TextField
                    type="email"
                    fullWidth
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                    error={Boolean(errors.email)}
                    helperText={errors.email ? "Email is required." : ""}
                />
                {showRegisterSuccessModal &&
                    <RegisterAlert message={successMessage} />
                }
                <InputLabel sx={{ mt: 2 }}>Phone Number</InputLabel>
                <Controller
                    control={control}
                    rules={{
                        validate: matchIsValidTel
                    }}

                    render={({ field, fieldState }) => (
                        <MuiTelInput
                            fullWidth
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            defaultCountry="KE"
                            helperText={fieldState.invalid ? "Tel is invalid" : ""}
                            error={fieldState.invalid}
                        />
                    )}
                    name="phone"
                />
                <InputLabel sx={{ mt: 2 }}>Home Address</InputLabel>
                <TextField
                    type="text"
                    fullWidth
                    {...register("home_address", {
                        required: true,
                    })}
                    error={Boolean(errors.address)}
                    helperText={errors.address ? "Home address is required." : ""}
                />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                        <InputLabel>Password</InputLabel>
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
                                                <VisibilityOffIcon />
                                            ) : (
                                                <VisibilityIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                        <InputLabel>Confirm Password</InputLabel>
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
                                                <VisibilityOffIcon />
                                            ) : (
                                                <VisibilityIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <InputLabel>Select Account Type</InputLabel>
                        <FormControl sx={{ width: '100%' }}>
                            <Controller
                                control={control}
                                name="category"
                                defaultValue=""
                                render={({ field }) => (
                                    <Select  {...field}>
                                        <MenuItem value="vendor">Vendor</MenuItem>
                                        <MenuItem value="customer">Customer</MenuItem>
                                        <MenuItem value="chef">Chef</MenuItem>
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </Grid>
                </Grid>

                <FormControlLabel
                    control={<Checkbox onChange={(e) => setAgreeToTerms(e.target.checked)} />}
                    label={
                        <>
                            I agree to the{" "}
                            <Link href="/terms-and-conditions" color="primary">
                                terms and conditions
                            </Link>
                        </>
                    }
                />



                <Button
                    variant="contained"
                    sx={{ mt: 3, width: '100%', backgroundColor: agreeToTerms ? '#FFA000' : 'grey', color: 'white' }}
                    type="submit"
                    disabled={!agreeToTerms}
                >
                    Register
                </Button>

            </Box>
        </Box>
    )
}

export default SignUpForm
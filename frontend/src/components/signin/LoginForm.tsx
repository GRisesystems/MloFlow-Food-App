import { useForm } from "react-hook-form";
import { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Avatar
} from '@mui/material';
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../utils/AuthContext'

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { email: "", password: "" } });
    const [recievedErrorMessage, setRecievedErrorMessage] = useState(false);
    const navigate = useNavigate()
    const { login, errorMessage } = useAuth();

    const onSubmit = async (data: any) => {
        try {
            const { access, refresh } = await login(data.email, data.password);
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            navigate('/chefs')
        } catch (error) {
            setRecievedErrorMessage(!recievedErrorMessage)
        }


    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" maxWidth="sm" sx={{ mt: 3 }}>
            <Box component="form" noValidate autoComplete="off"
                onSubmit={
                    handleSubmit(onSubmit)
                }
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={2}
                width="100%"
                maxWidth="400px"
                sx={
                    { boxShadow: 3, mt: 4 }
                }>
                <Avatar alt="MloFlow Logo" src="/src/assets/mloflowlogo.jfif" sx={{ height: 54 }} />
                {/* <Typography variant="h5" component="div" gutterBottom>
                    <LoginIcon fontSize="large" />
                </Typography> */}
                <Typography variant="h5" component="div" gutterBottom>
                    Login
                </Typography>
                {recievedErrorMessage && <Typography color='error'>{errorMessage}</Typography>}

                <TextField
                    sx={{ mt: 3 }}
                    label="Email"
                    type="email"
                    fullWidth
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                    error={Boolean(errors.email)}
                    helperText={errors.email ? "Enter valid email." : ""}
                />

                <TextField sx={
                    { mt: 3 }
                }
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    fullWidth
                    autoComplete="current-password"
                    variant="outlined"
                    {...register("password", { required: true })}
                    error={
                        Boolean(errors.password)
                    }
                    helperText={
                        errors.password ? "Password is required." : ""
                    } />
                <Button variant="contained"
                    sx={
                        { mt: 3 }
                    }
                    color="success"
                    type="submit">Login
                </Button>
            </Box>
        </Box>
    )
}

export default LoginForm
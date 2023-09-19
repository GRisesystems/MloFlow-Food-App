import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const EnterEmailForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if(data){
            navigate('/forgot-password')
        }
    }
    return (
        <Paper
            sx={{
                // minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mx:'auto',
                mt:2,
                width:'40%',
                p:2
                
            }}
        >
            <Box sx={{ mt: 2 }}>
                <Typography variant='body1' sx={{mb:1,fontWeight:'bold'}}>Enter registered email</Typography>
                <Box component="form"
                    noValidate autoComplete="off"
                    onSubmit={
                        handleSubmit(onSubmit)
                    }
                >
                    <TextField 
                        type="email"
                        fullWidth
                        {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                        error={Boolean(errors.email)}
                        helperText={errors.email ? "Enter valid email." : ""}
                    />
                    <Button variant="contained"
                        sx={
                            { mt: 3, 
                                backgroundColor: "#FFA000",
                                float:'right'
                            }
                        }
                        color="success"
                        type="submit">Get otp
                    </Button>

                </Box>
            </Box>
        </Paper>
    )
}

export default EnterEmailForm
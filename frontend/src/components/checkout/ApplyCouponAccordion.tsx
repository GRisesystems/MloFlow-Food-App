import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack, TextField } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    coupon_code: string
}

export default function ApplyCouponAccordion() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <Box sx={{ mt: 2, mb: 2 }}>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ bgcolor: 'primary.main' }}
                >
                    <Typography sx={{ color: 'white' }} variant='body1'>Have a coupon? Click here to enter your code</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' sx={{ mt: 2, mb: 2 }}>
                        If you have a coupon code, please apply it below.
                    </Typography>
                    <form action="">
                        <Stack direction="row" spacing={2}>
                            <TextField
                                margin="normal"                                
                                id="coupon_code"
                                label="Coupon code"
                                name="coupon_code"
                                autoFocus
                                sx={{
                                    width:'30%',
                                    "& label.Mui-focused": {
                                        color: '#000',
                                    }, "& .MuiOutlinedInput-root": {
                                        "&.Mui-focused fieldset": {
                                            borderColor: '#000',
                                        }
                                    }
                                }}
                            />
                            <Button
                                size="small"
                                disableElevation
                                type="submit"                                
                                variant="contained"                                
                                sx={{ mt: 3, mb: 2, backgroundColor: '#FFA000',"&:hover": { backgroundColor: '#FFA000',} }}
                            >
                                Apply Coupon
                            </Button>
                        </Stack>
                    </form>
                </AccordionDetails>
            </Accordion>

        </Box>
    );
}

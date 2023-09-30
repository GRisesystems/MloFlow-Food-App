import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack, TextField } from '@mui/material';
// import { useForm } from "react-hook-form"

const   ApplyCouponAccordion = () => {
    // const {formState} = useForm()
    // const onSubmit = (data) => console.log(data)
    return (
        <Box maxWidth={500}>
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
                                sx={{ width:'50%',
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
                                disableElevation
                                type="submit"                                
                                variant="contained"                                
                                sx={{  backgroundColor: '#FFA000',"&:hover": { backgroundColor: '#FFA000',} }}
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
export default ApplyCouponAccordion
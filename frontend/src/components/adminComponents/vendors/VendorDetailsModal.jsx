import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'


const VendorDetailsModal = ({ onClose }) => {
    return (
        <Box
            sx={{ p: 2 }}
        >
            <Grid container spacing={2}>
                <Grid item sm={12} xs={12} md={7}>
                    <Stack spacing={1}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>First name:</Typography>
                            <Typography>John</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Last name:</Typography>
                            <Typography>Doe</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Email:</Typography>
                            <Typography>john@gmail.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Phone number:</Typography>
                            <Typography>+354 12345678</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Country:</Typography>
                            <Typography>Kenya</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>County/State:</Typography>
                            <Typography>Nyandarua</Typography>
                        </Box>

                    </Stack>
                </Grid>
                <Grid item sm={12} xs={12} md={5}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Products:</Typography>
                        <Box>
                            <Typography>Farm produce</Typography>
                            <Typography>Fish</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Date joined:</Typography>
                        <Typography>12th June 2023</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} xs={12} md={4}></Grid>

            </Grid>
            <Box>
                <Divider />
            </Box>
            <Box>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Sales</Typography>
            </Box>
            <Box sx={{ mt: 2, mb: 1 }}>
                <Button variant="contained" color='error' onClick={() => onClose()} sx={{ textTransform: 'none', float: 'right' }}>Close</Button>

            </Box>
        </Box>
    )
}

export default VendorDetailsModal
import { Box, Button, Card, CardContent, Divider, Stack, Typography } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { orange } from '@mui/material/colors';

const ChefDetailsContent = () => {
    return (
        <Card elevation={0}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    Satoshi Nakamoto
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, display: "flex", alignItems: "center", fontSize: "1rem", marginRight: "4px" }}>
                    <LocationOnIcon />
                    Nairobi
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Speciality: <span style={{ color: 'green' }}>Sea Food</span>
                    </Typography>
                </Box>
                <Stack sx={{ mt: 2 }} direction="row" spacing={0.2}>
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                </Stack>
                <Box sx={{ mt: 2,mb:2 }}>
                    <Divider />
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        About
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quam culpa voluptatum dicta temporibus a? Iste, incidunt rerum ducimus dicta similique ab consectetur eveniet consequatur aspernatur a illo aliquam perferendis.
                    </Typography>
                    <Box sx={{ mt: 2,mb:2 }}>
                        <Divider />
                        <Typography sx={{ fontWeight: 'bold' }}>
                            Availability status
                        </Typography>
                        <Typography sx={{ color: 'green' }}>Available</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ mt: 2,width:'50%' }}>
                        <Button style={{ order: 1 }} variant='contained' sx={{width:'100%',backgroundColor: 'orange', textTransform: 'none', '&:hover': { backgroundColor: 'orange' }, color: 'black' }}>Book Now</Button>
                    </Box>
                </Box>

            </CardContent>
        </Card>
    )
}

export default ChefDetailsContent
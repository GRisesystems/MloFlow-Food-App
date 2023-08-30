import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { orange } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import chef from './chef.jpeg';

const ChefCard = ({ chef_name }: { chef_name: string }) => {
    const navigate = useNavigate()

    const handleDetailsPageNavigation = (id:any) => {
        navigate(`/chefs/${id}`);
    }
    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={chef}
                alt="Chef"
            />
            <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                    {chef_name}
                </Typography>
                <Typography variant="body1" >
                    <LocationOnIcon /> Nairobi
                </Typography>
                <Typography>
                    Speciality: Sea Food
                </Typography>
                <Stack sx={{ mt: 3 }} direction="row" spacing={0.2}>
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                </Stack>
                <CardActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',

                    }}
                >
                    <Button style={{ order: 1 }} variant='contained' sx={{ backgroundColor: 'orange', textTransform: 'none', '&:hover': { backgroundColor: 'orange' }, color: 'black' }}>Book Now</Button>
                    <Button style={{ order: 3 }} variant='outlined' sx={{ textTransform: 'none', '&:hover': { backgroundColor: 'none' } }} onClick={() => handleDetailsPageNavigation(1)}>Details {'>>'}</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default ChefCard;

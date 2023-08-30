import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import chef from './chef.jpeg';
import { Link } from 'react-router-dom';
import BookNowForm from './BookNowForm';

const ChefCard = ({ chef_name }: { chef_name: string }) => { // Destructure chef_name from props
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    
    
    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={chef}
                alt="Chef"
            />
            <CardContent>
                <Typography sx={{fontWeight:'bold'}} gutterBottom variant="h6" component="div">
                    {chef_name}
                </Typography>
                <Typography variant="body1" >
                    <LocationOnIcon /> Nairobi
                </Typography>
                <Typography>
                    Speciality: Sea Food
                </Typography>
                <Stack sx={{ mt: 3 }} direction="row" spacing={0.2}>
                    <StarIcon sx={{ color: yellow[500] }} />
                    <StarIcon sx={{ color: yellow[500] }} />
                    <StarIcon sx={{ color: yellow[500] }} />
                    <StarIcon sx={{ color: yellow[500] }} />
                    <StarIcon sx={{ color: yellow[500] }} />
                </Stack>
                <CardActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        
                    }}
                >
                    <Link to="/book-now">
                    <Button
                    style={{ order: 1 }}
                    variant='contained'
                    sx={{ backgroundColor: 'orange', textTransform: 'none', '&:hover': { backgroundColor: 'orange' }, color: 'black' }}
                    onClick={handleOpen} // Open the modal when the button is clicked
                >
          Book Now
        </Button>
        </Link>
                    <Button  style={{ order: 3 }} variant='outlined' sx={{ textTransform:'none','&:hover': { backgroundColor: 'orange' } }}>Details {'>>'}</Button>
                   
                </CardActions>
                
            </CardContent>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Book Now</DialogTitle>
                <DialogContent>
                    <BookNowForm /> {/* Render the BookNowForm inside the modal */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};

export default ChefCard;

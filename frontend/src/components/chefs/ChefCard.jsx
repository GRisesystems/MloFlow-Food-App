import React, { useState } from 'react'; // Make sure to import React
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { orange } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Checkbox, FormControlLabel } from '@mui/material';
import chef from './chef.jpeg';
import BookNowForm from './BookNowForm';

const ChefCard = ({ chef_name, status }) => {
    const navigate = useNavigate();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isBookingFormOpen, setBookingFormOpen] = useState(false); // Add state for the form

    const handleOpenDialog = () => {
        // Dialog onOpen function
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        // Dialog onClose function
        setDialogOpen(false);
    };

    const handleTermsAcceptance = () => {
        setTermsAccepted(!termsAccepted);
        // Close the dialog when terms are accepted
        if (termsAccepted) {
            setDialogOpen(false);
        }
    };

    const handleContinueBooking = () => {
        if (termsAccepted) {
            // If terms are accepted, proceed with booking
            // You can add your booking logic here
            // For example, open the booking form
            setBookingFormOpen(true); // Open the booking form
        }
    };

    const handleDetailsPageNavigation = (id) => {
        navigate(`/chefs/${id}`);
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
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                    {chef_name}
                </Typography>
                <Typography variant="body1">
                    <LocationOnIcon /> Nairobi
                </Typography>
                <Typography>
                    Speciality: Sea Food
                </Typography>
                <Stack sx={{ mt: 2 }} direction="row" spacing={0.2}>
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                    <StarIcon sx={{ color: orange[500] }} />
                </Stack>
                <Stack sx={{ mt: 2 }} direction="row" spacing={2}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Status:
                    </Typography>
                    <Typography sx={{ color: 'green' }}>{status}</Typography>
                </Stack>

                <CardActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {
                        status === 'available' ?
                        <Button onClick={handleOpenDialog} style={{ order: 1 }} variant='contained' sx={{ backgroundColor: 'orange', textTransform: 'none', '&:hover': { backgroundColor: 'orange' }, color: 'black' }}>Book Now</Button>
                        :
                        <Button onClick={handleOpenDialog} style={{ order: 1 }} variant='contained' sx={{ backgroundColor: 'orange', textTransform: 'none', '&:hover': { backgroundColor: 'orange' }, color: 'black' }}>Schedule date</Button>
                    }                    
                    <Button style={{ order: 3 }} variant='outlined' sx={{ textTransform: 'none', '&:hover': { backgroundColor: 'none' } }} onClick={() => handleDetailsPageNavigation(1)}>Details {'>>'}</Button>
                </CardActions>
            </CardContent>

            {/* Pass the open prop to BookNowForm */}
            <BookNowForm open={isBookingFormOpen} onClose={() => setBookingFormOpen(false)} accessToken={undefined} />
            
            <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>Terms and Conditions</DialogTitle>
                <DialogContent>
                <Typography>
            <strong>MloFlow Chef Booking Terms and Conditions</strong>
          </Typography>
          <Typography>
            <strong>Chef Selection Assurance:</strong>
            <ul>
              <li>
                If the selected chef declines your request, MloFlow guarantees to promptly assign another high-quality chef
                to provide the service you expect, ensuring excellence in every culinary experience.
              </li>
            </ul>
          </Typography>
          <Typography>
            <strong>Notification of Chef Assignment:</strong>
            <ul>
              <li>
                Upon reassignment as per Clause 1, MloFlow will send you a confirmation email within 3 hours to inform you of
                the newly assigned chef.
              </li>
            </ul>
          </Typography>
          <Typography>
            <strong>Payment Process:</strong>
            <ul>
              <li>
                Once you receive the confirmation email, you are required to make the payment as specified. Upon successful
                payment confirmation, the chef will be scheduled to arrive at your location.
              </li>
            </ul>
          </Typography>
          <Typography>
            <strong>Cancellation Window:</strong>
            <ul>
              <li>
                In the event that you do not receive any notifications from MloFlow within 3 hours of the initial request,
                you have the option to cancel the booking.
              </li>
            </ul>
          </Typography>
          <Typography>
            <strong>Cancellation Refund Policy:</strong>
            <ul>
              <li>
                If you choose to cancel the booking after making the payment, MloFlow will refund 80% of the total amount
                charged for the chef service, retaining the remaining 20% as processing fees.
              </li>
            </ul>
          </Typography>
          <FormControlLabel
            control={<Checkbox checked={termsAccepted} onChange={handleTermsAcceptance} />}
            label="I accept the terms and conditions"
          />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleContinueBooking} color="primary" disabled={!termsAccepted}>
                        Continue Booking
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};

export default ChefCard;

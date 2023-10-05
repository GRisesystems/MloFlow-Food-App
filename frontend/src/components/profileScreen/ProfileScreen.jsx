import React, { useState } from 'react';
import { Typography, Paper, Button, Dialog, DialogTitle, DialogContent, Avatar, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import UpdateProfileForm from './UpdateProfileForm'; // Import the UpdateProfileForm component
import OrderHistory from '../../screens/userProfileScreen/OrderHistory'; 
import FileUpload from '../chefs/FileUpload';

const ProfileScreen = ({ user, orderHistory }) => {
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);

  const handleEditClick = () => {
    setEditDialogOpen(true);
  };

  const handleDialogClose = () => {
    setEditDialogOpen(false);
  };

  return (
        <Paper elevation={16} style={{ padding: '22px', margin: '20px', textAlign: 'left' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4} md={3} style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={user.avatarUrl} alt={user.name} sx={{ width: 150, height: 150 }} />
          <IconButton color="primary" aria-label="edit profile picture" onClick={handleEditClick} style={{ marginLeft: '12px' }}>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Typography variant="h4" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {user.email}
          </Typography>
          {/* Render other user details here */}
          <Button variant="contained" color="primary" style={{ marginTop: '16px' }} onClick={handleEditClick}>
            Edit Profile
          </Button>
          

          {/* Edit Profile Dialog */}
          <Dialog open={isEditDialogOpen} onClose={handleDialogClose}>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogContent>
              <UpdateProfileForm user={user} onClose={handleDialogClose} />
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
      <OrderHistory orderHistory={orderHistory} />
    </Paper>
   
  );
  
};

export default ProfileScreen;

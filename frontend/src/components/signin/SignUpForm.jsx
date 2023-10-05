import React, { useState } from 'react';
import { Typography, Box, Grid, TextField, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import OrderHistory from '../../screens/userProfileScreen/OrderHistory';

const ProfileScreen = ({ user, orderHistory }) => {
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleEditClick = () => {
    setEditedName(user.name);
    setEditedEmail(user.email);
    setEditDialogOpen(true);
  };

  const handleDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value);
  };

  const handleSaveChanges = () => {
    // Handle save changes logic here
    // Update user object with edited details

    // Close the dialog
    handleDialogClose();
  };

  return (
    <Box elevation={3} p={2} m={2} textAlign="center">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4} md={3}>
          <img src={user.avatarUrl} alt={user.name} style={{ width: 150, height: 150, borderRadius: '50%' }} />
          <IconButton color="primary" aria-label="edit profile picture" onClick={handleEditClick}>
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
          <Button variant="contained" color="primary" onClick={handleEditClick}>
            Edit Profile
          </Button>
        </Grid>
      </Grid>
      <OrderHistory orderHistory={orderHistory} />

      {/* Edit Profile Dialog */}
      <Dialog open={isEditDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={editedName}
            onChange={handleNameChange}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={editedEmail}
            onChange={handleEmailChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfileScreen;

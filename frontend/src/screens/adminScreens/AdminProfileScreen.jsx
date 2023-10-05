import React, { useState } from 'react';
import { Container, Typography, Avatar, Grid, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const AdminProfileScreen = () => {
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const user = {
    name: 'Admin Person',
    email: 'admin2@gmail.com',
    avatarUrl: '/path/to/admin-avatar.jpg', // Replace with the actual path
    // Add other admin details here
  };

  const handleEditClick = () => {
    setEditDialogOpen(true);
  };

  const handleDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSaveClick = () => {
    // Add logic to handle image upload (use the 'selectedImage' state)
    // This can be done via form submission or API call to upload the image file
    // After successful upload, update the 'avatarUrl' in the 'user' object
    // For example:
    // 1. Create a FormData object and append the 'selectedImage' to it
    // 2. Send a POST request to the server to upload the image
    // 3. Update 'avatarUrl' in 'user' with the new image URL returned from the server

    // After successful upload, close the dialog
    handleDialogClose();
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginLeft: '0px',}}>
        <Typography variant="h4" gutterBottom>
          Admin Profile
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Avatar src={user.avatarUrl} alt={user.name} sx={{ width: 150, height: 150 }} />
            
            <Button variant="outlined" onClick={handleEditClick} style={{ marginTop: '10px' }}>
              Edit
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {user.email}
            </Typography>
            {/* Add other admin details here */}
          </Grid>
        </Grid>
      </Paper>

      {/* Edit Profile Picture Dialog */}
      <Dialog open={isEditDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Edit Profile Picture</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Upload a new profile picture.
            <br />
            <DialogContentText>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            </DialogContentText>
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveClick} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminProfileScreen;

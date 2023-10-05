import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const UpdateProfileForm = ({ user, onClose }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/customer/', {
        method: 'PUT', // or 'POST' depending on your API
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if required
        },
        body: JSON.stringify({
          customer: editedUser.customer, // Use the appropriate field from your user object
          id: editedUser.id, // Use the appropriate field from your user object
          country: editedUser.country,
          county: editedUser.county,
          city: editedUser.city,
          office_address: editedUser.office_address,
        }),
      });

      if (response.ok) {
        // Handle successful API response (if needed)
        // For example, you can show a success message to the user
        console.log('Profile updated successfully');
      } else {
        // Handle error response from the API
        console.error('Error updating profile');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }

    // Close the form after saving changes, regardless of success or failure
    onClose();
  };

  return (
    <form onSubmit={handleSaveChanges}>
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        margin="normal"
        name="name"
        value={editedUser.name}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        name="email"
        value={editedUser.email}
        onChange={handleInputChange}
      />
      {/* Add other input fields for additional user details */}
      <div>
      <Button type="submit" variant="contained" color="primary">
        Save Changes
      </Button>
      </div>
      
    </form>
  );
};

export default UpdateProfileForm;

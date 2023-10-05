import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material';
import ProfileScreen from '../../components/profileScreen/ProfileScreen';
import UpdateProfileForm from '../../components/profileScreen/UpdateProfileForm';
import OrderHistory from '../../screens/userProfileScreen/OrderHistory'; // Import the OrderHistory component

const UserProfileScreen = () => {
  const userDetails = {
    name: 'Wairati',
    email: 'wairati@gmail.com',
    avatarUrl: '/path/to/avatar.jpg', // Replace with the actual path
    // Add other user details here
  };

  const orderHistoryData = [
    { id: 1, date: '2023-10-10' },
    { id: 2, date: '2023-10-09' },
    // Add more order history items as needed
  ];

  return (
    <div>
      <Typography variant="h4" style={{ fontSize: '35px', textAlign: 'center' }}>
        User Profile
      </Typography>
      {/* Pass userDetails and orderHistoryData as props */}
      <ProfileScreen user={userDetails} orderHistory={orderHistoryData} />
      {/* <OrderHistory orderHistory={orderHistoryData} /> */}
      {/* Define your routes here if needed */}
       <Routes>
        <Route path="/customer/update" element={<UpdateProfileForm />} />
      </Routes> 
    </div>
  );
};

export default UserProfileScreen;

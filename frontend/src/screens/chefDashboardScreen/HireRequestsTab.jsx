// HireRequestsTab.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HireRequestsTab = () => {
  const [newBookings, setNewBookings] = useState([]);
  
  useEffect(() => {
    // Make a PATCH request to fetch "new" chef bookings
    axios.patch('/host/customer/chef-bookings/new/')
      .then(response => {
        setNewBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching new chef bookings:', error);
      });
  }, []);

  // Render "new" chef bookings in the component

  return (
    <div>
      {/* Render "new" chef bookings */}
      {newBookings.map(booking => (
        <div key={booking.id}>{booking.name}</div>
      ))}
    </div>
  );
};

export default HireRequestsTab;

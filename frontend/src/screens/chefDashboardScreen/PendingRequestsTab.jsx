// PendingRequestsTab.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PendingRequestsTab = () => {
  const [pendingBookings, setPendingBookings] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.patch('/host/customer/chef-bookings/');
        // setBooks(books);
        console.log(response);
      } catch (err) {
        console.log('Error occured when fetching books');
      }
    })();
  }, []);
  
  // useEffect(() => {
  //   // Make a PATCH request to fetch "pending" chef bookings
  //   axios.patch('/host/customer/chef-bookings/pending/')
  //     .then(response => {
  //       setPendingBookings(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching pending chef bookings:', error);
  //     });
  // }, []);

  // Render "pending" chef bookings in the component

  return (
    <div>
      {/* Render "pending" chef bookings */}
      
      {pendingBookings.map(booking => (
        <div key={booking.id}>{booking.name}</div>
      ))}
    </div>
  );
};

export default PendingRequestsTab;

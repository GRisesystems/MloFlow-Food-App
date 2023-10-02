// History.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [historyBookings, setHistoryBookings] = useState([]);
  
  useEffect(() => {
    // Make a PATCH request to fetch "history" chef bookings
    axios.patch('/host/customer/chef-bookings/')
      .then(response => {
        setHistoryBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching history chef bookings:', error);
      });
  }, []);

  // Render "history" chef bookings in the component

  return (
    <div>
      {/* Render "history" chef bookings */}
      {historyBookings.map(booking => (
        <div key={booking.id}>{booking.name}</div>
      ))}
    </div>
  );
};

export default History;

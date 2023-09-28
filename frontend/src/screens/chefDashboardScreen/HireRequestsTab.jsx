import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HireRequestsTab = () => {
  const [newRequests, setNewRequests] = useState([]);

  useEffect(() => {
    // Make a PATCH request to fetch "new" chef booking requests
    axios.patch('/host/customer/chef-bookings/new/')
      .then(response => {
        setNewRequests(response.data);
      })
      .catch(error => {
        console.error('Error fetching new chef booking requests:', error);
      });
  }, []);

  const handleAccept = (id) => {
    // Update the status to "pending" when "Accept" is clicked
    const updatedRequests = newRequests.map((booking) =>
      booking.id === id ? { ...booking, status: 'pending' } : booking
    );
    setNewRequests(updatedRequests);
  };

  const handleDeny = (id) => {
    // Update the status to "denied" when "Deny" is clicked
    const updatedRequests = newRequests.map((booking) =>
      booking.id === id ? { ...booking, status: 'denied' } : booking
    );
    setNewRequests(updatedRequests);
  };

  return (
    <div>
      <h2>New Requests</h2>
      {newRequests.length === 0 ? (
        <p>No new requests at the moment.</p>
      ) : (
        <ul>
          {newRequests.map((booking) => (
            <li key={booking.id}>
              <p>First Name: {booking.firstName}</p>
              <p>Surname: {booking.surname}</p>
              <p>Specialty: {booking.specialty}</p>
              <p>Location: {booking.location}</p>
              <p>Occasion: {booking.occasion}</p>
              <p>Number of Guests: {booking.numGuests}</p>
              <p>Date Range: {booking.dateRange}</p>
              <p>Phone Number: {booking.phoneNumber}</p>
              <button
                onClick={() => handleAccept(booking.id)}
                style={{ backgroundColor: '#fbb31d', color: 'black' }}
              >
                Accept
              </button>
              <button
                onClick={() => handleDeny(booking.id)}
                style={{ backgroundColor: '#fbb31d', color: 'black' }}
              >
                Deny
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HireRequestsTab;

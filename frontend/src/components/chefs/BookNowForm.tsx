import { Button, Dialog, DialogActions } from '@mui/material';
import { useState } from 'react';

const BookNowForm = ({ open, onClose }: any) => {    
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [occasion, setOccasion] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., sending data to a server
    console.log('Form submitted:', {
      firstName,
      surname,
      specialty,
      occasion,
      location,
      date,
      phoneNumber,
    });
    // close Dialog after submitting the form
    onClose();

  };
  // Function to handle Dialog Close Button On Click event
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <h2>Request Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Surname:
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </label>
        <br />
        <label>
          Specialty:
          <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
        </label>
        <br />
        <label>
          Occasion:
          <input type="text" value={occasion} onChange={(e) => setOccasion(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        {/* Dialog buttons */}
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button type="submit">Request</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BookNowForm;

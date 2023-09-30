import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const RootContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5; /* Light gray background color */
  min-height: 100vh; /* Ensure the content takes up the full viewport height */
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StatCardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StatCardWrapper = styled.div`
  margin-right: 20px;
  padding: 5px;
  margin-bottom: 30px;
`;

const StatCard = styled(Card)`
  width: 200px;
  height: 180px;
  margin: 10px;
  background-color: #fff;
  border-radius: 18px;
  box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
`;

const StatCardTitle = styled.h2`
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const StatCardValue = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 24px;
`;

const StatCardContent = styled(CardContent)`
  text-align: center;
`;

const TableContainerStyled = styled(TableContainer)`
  background-color: white;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0.3, 0, 0, 0.3);
  margin-top: 5px;
  width: 100%;
`;

const BoldTableCell = styled(TableCell)`
  font-weight: bold;
`;

const ActionButton = styled(Button)`
  background-color: #fbb31d;
  color: black;
`;

const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 80%;
  max-width: 800px;
`;

const SearchButton = styled(Button)`
  background-color: #fbb31d;
  color: black;
  margin-right: 120px;
`;

const GlobalStyles = styled.div`
  background-color: gray;
  min-height: 100vh;
`;

const ChefAdminScreen = () => {
  const chefStatistics = {
    totalChefs: 25,
    AvailableChefs: 17,
    UnavailableChefs: 8,
    AcceptedRequests: 'Faith Sang',
    DeniedRequests: 'Isaac Kamula',
  };

  const chefData = [
    {
      id: 1,
      chefName: 'Isaac Kamula',
      specialty: 'Kenyan Dishes',
      phoneNumber: '123-456-7890',
      email: 'chef1@example.com',
      location: 'Kisumu',
    },
    {
      id: 2,
      chefName: 'Faith Sang',
      specialty: 'International Dishes',
      phoneNumber: '987-654-3210',
      email: 'chef2@example.com',
      location: 'Nairobi',
    },
    {
      id: 3,
      chefName: 'Deus-Darius Chimoyi',
      specialty: 'Swahili Cuisine',
      phoneNumber: '555-555-5555',
      email: 'chef3@example.com',
      location: 'Abuja',
    },
    {
      id: 4,
      chefName: 'Beatrice Murage',
      specialty: 'Pasteries',
      phoneNumber: '777-777-7777',
      email: 'chef4@example.com',
      location: 'Mexico City',
    },
    {
      id: 5,
      chefName: 'Chef 5',
      specialty: 'Chinese Cuisine',
      phoneNumber: '888-888-8888',
      email: 'chef5@example.com',
      location: 'Beijing',
    },
    {
      id: 6,
      chefName: 'Chef 6',
      specialty: 'Indian Cuisine',
      phoneNumber: '999-999-9999',
      email: 'chef6@example.com',
      location: 'Mumbai',
    },
    {
      id: 7,
      chefName: 'Chef 7',
      specialty: 'Japanese Cuisine',
      phoneNumber: '777-888-9999',
      email: 'chef7@example.com',
      location: 'Tokyo',
    },
    // Add more chef data as needed
  ];

   const [dialogOpen, setDialogOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isBookingFormOpen, setBookingFormOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleTermsAcceptance = () => {
    setTermsAccepted(!termsAccepted);
    if (termsAccepted) {
      setDialogOpen(false);
    }
  };

  const handleContinueBooking = () => {
    if (termsAccepted) {
      setBookingFormOpen(true);
    }
  };

  const navigate = useNavigate();

  const [searchText, setSearchText] = React.useState('');
  const [filter, setFilter] = React.useState('All');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredChefData = chefData.filter((chef) => {
    if (filter === 'All') {
      return true;
    }
    return chef.specialty === filter;
  });

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const searchedChefData = filteredChefData.filter((chef) => {
    return (
      chef.chefName.toLowerCase().includes(searchText.toLowerCase()) ||
      chef.location.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const handleDetailsPageNavigation = (id) => {
    navigate(`/chefs/${id}`);
  };

  return (
    <GlobalStyles>
      <RootContainer>
        <h1 style={{ color: '#0275d8' }}>Chef Statistics</h1>
        <StatCardRow>
          <StatCardWrapper>
            <StatCard>
              <StatCardContent>
                <RestaurantIcon fontSize="large" />
                <StatCardTitle>Total Chefs</StatCardTitle>
                <StatCardValue>{chefStatistics.totalChefs}</StatCardValue>
              </StatCardContent>
            </StatCard>
          </StatCardWrapper>

          <StatCardWrapper>
            <StatCard>
              <StatCardContent>
                <RestaurantIcon fontSize="large" />
                <StatCardTitle>Available Chefs</StatCardTitle>
                <StatCardValue>{chefStatistics.AvailableChefs}</StatCardValue>
              </StatCardContent>
            </StatCard>
          </StatCardWrapper>

          <StatCardWrapper>
            <StatCard>
              <StatCardContent>
                <RestaurantIcon fontSize="large" />
                <StatCardTitle>Unavailable Chefs</StatCardTitle>
                <StatCardValue>{chefStatistics.UnavailableChefs}</StatCardValue>
              </StatCardContent>
            </StatCard>
          </StatCardWrapper>

          <StatCardWrapper>
            <StatCard>
              <StatCardContent>
                <RestaurantIcon fontSize="large" />
                <StatCardTitle>Most Accepted Requests</StatCardTitle>
                <StatCardValue>{chefStatistics.AcceptedRequests}</StatCardValue>
              </StatCardContent>
            </StatCard>
          </StatCardWrapper>

          <StatCardWrapper>
            <StatCard>
              <StatCardContent>
                <RestaurantIcon fontSize="large" />
                <StatCardTitle>Most Denied Requests</StatCardTitle>
                <StatCardValue>{chefStatistics.DeniedRequests}</StatCardValue>
              </StatCardContent>
            </StatCard>
          </StatCardWrapper>
        </StatCardRow>

        <SearchFilterContainer>
          <TextField
            label="Search For A Chef"
            variant="outlined"
            size="small"
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <SearchButton variant="contained">Search</SearchButton>

          <FormControl variant="outlined" size="small" style={{ width: '300px' }}>
            <InputLabel>Filter</InputLabel>
            <Select
              value={filter}
              onChange={handleFilterChange}
              label="Filter"
            >
              <MenuItem value="All">All</MenuItem>
            </Select>
          </FormControl>
        </SearchFilterContainer>

        <h2 style={{ color: '#0275d8' }}>Chef Information</h2>
        <TableContainerStyled>
          <Table>
            <TableHead>
              <TableRow>
                <BoldTableCell>Chef Name</BoldTableCell>
                <BoldTableCell>Specialty</BoldTableCell>
                <BoldTableCell>Phone Number</BoldTableCell>
                <BoldTableCell>Email</BoldTableCell>
                <BoldTableCell>Location</BoldTableCell>
                <BoldTableCell>Action</BoldTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchedChefData.map((chef) => (
                <TableRow key={chef.id}>
                  <TableCell>{chef.chefName}</TableCell>
                  <TableCell>{chef.specialty}</TableCell>
                  <TableCell>{chef.phoneNumber}</TableCell>
                  <TableCell>{chef.email}</TableCell>
                  <TableCell>{chef.location}</TableCell>
                  <TableCell>
                    <ActionButton onClick={() => handleDetailsPageNavigation(chef.id)}>View Details</ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainerStyled>
      </RootContainer>
    </GlobalStyles>
  );
};

export default ChefAdminScreen;
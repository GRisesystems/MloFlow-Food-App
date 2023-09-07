import React from 'react';
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Container = styled.div`
  padding: 10px;
`;

const StyledTableContainer = styled(TableContainer)`
  margin-left: 5px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledTable = styled(Table)`
  font-weight: bolder;
  border-collapse: separate;
  border-spacing: 0 8px;
  border-collapse: separate;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 1);
`;

const StyledTableCell = styled(TableCell)`
  padding: 16px;
  font-weight: bold;
`;



const pendingRequestsData = [
  {
    requestId: 1,
    firstName: 'James',
    surname: 'Johnson',
    specialty: 'Swahili Cuisine',
    occasion: 'Corporate Event',
    location: 'Conference Center',
    startDate: '10/11/23',
    endDate: '10/11/23',
    
  },
  // Add more data...
];

const PendingRequestsTab: React.FC = () => {
  return (
    <Container>
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCell>Request ID</StyledTableCell>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Surname</StyledTableCell>
              <StyledTableCell>Specialty</StyledTableCell>
              <StyledTableCell>Occasion</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Start to End Date</StyledTableCell>
             
              
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingRequestsData.map((request) => (
              <TableRow key={request.requestId}>
                <StyledTableCell>{request.requestId}</StyledTableCell>
                <StyledTableCell>{request.firstName}</StyledTableCell>
                <StyledTableCell>{request.surname}</StyledTableCell>
                <StyledTableCell>{request.specialty}</StyledTableCell>
                <StyledTableCell>{request.occasion}</StyledTableCell>
                <StyledTableCell>{request.location}</StyledTableCell>
                <StyledTableCell>
                  {request.startDate} to {request.endDate}
                </StyledTableCell>
              
                <StyledTableCell>
                
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </Container>
  );
};

export default PendingRequestsTab;

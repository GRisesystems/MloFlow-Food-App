import { useState } from 'react';
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

// import Switch from '@mui/material/Switch';

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

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;





export const hireRequestsData = [
  {
    requestId: 1,
    firstName: 'Isaac',
    surname: 'Kamula',
    specialty: 'Swahili Cuisine',
    occasion: 'Wedding Reception',
    location: 'Westlands',
    startDate: '15/09/23',
    endDate: '17/09/23',
    
  },
  {
    requestId: 2,
    firstName: 'Deusdarius',
    surname: 'Chimoyi',
    specialty: 'Seafood',
    occasion: 'Dinner Party',
    location: 'Villa Resort',
    startDate: '15/09/23',
    endDate: '25/09/23',
    
  },
  {
    requestId: 3,
    firstName: 'Beatrice',
    surname: 'Murage',
    specialty: 'Fried chicken',
    occasion: 'Birthday Party',
    location: 'Nairobi West',
    startDate: '05/09/23',
    endDate: '02/09/23',
    
  },
  {
    requestId: 4,
    firstName: 'Faith',
    surname: 'Sang',
    specialty: 'Traditional food',
    occasion: 'Wedding',
    location: 'Abuja',
    startDate: '05/03/23',
    endDate: '19/09/23',
    
  },
  
];
// interface HireRequestsTabProps {
//   acceptedRequests: number[];
//   deniedRequests: number[];
//   setAcceptedRequests: React.Dispatch<React.SetStateAction<number[]>>;
//   setDeniedRequests: React.Dispatch<React.SetStateAction<number[]>>;
//   onSelectRequest: (requestId: number) => void;
//   selectedRequest: number | null;
// }

const HireRequestsTab: React.FC = () => {
  const [acceptedRequests, setAcceptedRequests] = useState<number[]>([]);
  const [deniedRequests, setDeniedRequests] = useState<number[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null);

  const onSelectRequest = (requestId: number) => {
    setSelectedRequest(requestId);
  };


  
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
             
              <StyledTableCell>Requests</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hireRequestsData.map((request) => (
              <TableRow key={request.requestId} onClick={() => onSelectRequest(request.requestId)}>
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
                  <ButtonContainer>
                    {acceptedRequests.includes(request.requestId) || deniedRequests.includes(request.requestId) ? (
                      <span>Done</span> // Show "Done" if the request has been accepted or denied
                    ) : (
                      <>
                        <Button
                          variant="outlined"
                          style={{ backgroundColor: '#fbb31d', color: 'black' }}
                          onClick={() => {
                            setAcceptedRequests([...acceptedRequests, request.requestId]);
                            setSelectedRequest(null); // Clear selected request
                          }}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="outlined"
                          style={{ backgroundColor: 'black', color: '#fbb31d' }}
                          onClick={() => {
                            setDeniedRequests([...deniedRequests, request.requestId]);
                            setSelectedRequest(null); // Clear selected request
                          }}
                        >
                          Deny
                        </Button>
                      </>
                    )}
                  </ButtonContainer>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </Container>
  );
};

export default HireRequestsTab;

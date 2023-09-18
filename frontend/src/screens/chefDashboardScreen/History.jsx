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

const historyData = [
  {
    requestID: 1,
    location: 'Nairobi',
    specialty: 'Swahili Cuisine',
    date: '2023-08-05'
  },
  {
    requestID: 2,
    location: 'Abuja',
    specialty: 'French Cuisine',
    date: '2023-08-10'
  },
  // Add more data...
];

const HistoryTab = ({ acceptedRequests, deniedRequests }) => {
  // Filter the pending requests based on accepted and denied requests
  // const HistoryDataFiltered = HistoryData.filter(
  //   (request) =>
  //     !acceptedRequests.includes(request.requestId) &&
  //     !deniedRequests.includes(request.requestId)
  // );
  return (
    <Container>
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCell>Request ID</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Specialty</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historyData.map((event) => (
              <TableRow key={event.requestID}>
                <StyledTableCell>{event.requestID}</StyledTableCell>
                <StyledTableCell>{event.location}</StyledTableCell>
                <StyledTableCell>{event.specialty}</StyledTableCell>
                <StyledTableCell>{event.date}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </Container>
  );
};

export default HistoryTab;

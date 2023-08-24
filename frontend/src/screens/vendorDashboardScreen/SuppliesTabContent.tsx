import React from 'react';
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const Container = styled.div`
  padding: 10px;
`;

const StyledTableContainer = styled(TableContainer)`
  margin-left: 5px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
`;

const StyledTable = styled(Table)`
  font-weight: bolder;
  border-collapse: separate;
  border-spacing: 0 8px; /* Add spacing between rows */
  border-collapse: separate;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 1);
`;

const StyledTableCell = styled(TableCell)`
  padding: 16px; /* Adjust padding as needed */
  font-weight: bold;
 
`;

const SuppliesTabContent: React.FC = () => {
  const suppliesData = [
    { serialNumber: 1, productName: 'Tomatoes', quantity: 50, price: 2.5 },
    { serialNumber: 2, productName: 'Onions', quantity: 30, price: 1.0 },
    { serialNumber: 3, productName: 'Pears', quantity: 20, price: 0.8 },
    { serialNumber: 4, productName: 'Chicken', quantity: 10, price: 5.0 },
    { serialNumber: 5, productName: 'Trout', quantity: 15, price: 3.5 },
  ];

  return (
    <Container>
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>Price ($)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliesData.map((supply) => (
              <TableRow key={supply.serialNumber}>
                <StyledTableCell>{supply.serialNumber}</StyledTableCell>
                <StyledTableCell>{supply.productName}</StyledTableCell>
                <StyledTableCell>{supply.quantity}</StyledTableCell>
                <StyledTableCell>{supply.price.toFixed(2)}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </Container>
  );
};

export default SuppliesTabContent;

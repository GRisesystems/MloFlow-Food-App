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

const requestedProductsData = [
  { serialNumber: 1, productName: 'Milk', quantity: 3,price: 2.5 },
  { serialNumber: 2, productName: 'Bread', quantity: 2, price: 2.5 },
  { serialNumber: 3, productName: 'Eggs', quantity: 12, price: 2.5 },
  // Add more data...
];

const RequestedProductsTabContent: React.FC = () => {
  return (
   <Container>
     
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requestedProductsData.map((product) => (
              <TableRow key={product.serialNumber}>
                <StyledTableCell>{product.serialNumber}</StyledTableCell>
                <StyledTableCell>{product.productName}</StyledTableCell>
                <StyledTableCell>{product.quantity}</StyledTableCell>
                <StyledTableCell>{product.price}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </Container>
  );
};

export default RequestedProductsTabContent;

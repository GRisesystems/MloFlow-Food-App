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
  border-spacing: 0 8px; /* Add spacing between rows */
  border-collapse: separate;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 1);
`;

const StyledTableCell = styled(TableCell)`
  padding: 16px; /* Adjust padding as needed */
  font-weight: bold;
 
`;
const StyledImageCell = styled(TableCell)`
  padding: 10px;
  width: 100px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0 0 0 10px;
`;

const requestedProductsData = [
  { serialNumber: 1, productName: 'Tomatoes', quantity: 3,price: 2.5, imageSrc: '/public/Images/Fresh Produce/Tomatoes.jpg'},
  { serialNumber: 2, productName: 'Pears', quantity: 2, price: 2.5, imageSrc: '/public/Images/Fresh Produce/Pears.jpg' },
  { serialNumber: 3, productName: 'Tuna', quantity: 12, price: 2.5, imageSrc: '/public/Images/Fish/Trout.jpg'},
  // Add more data...
];

const RequestedProductsTabContent: React.FC = () => {
  return (
   <Container>
     
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
            <StyledImageCell></StyledImageCell> {/* Empty cell for images */}
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requestedProductsData.map((product) => (
              <TableRow key={product.serialNumber}>
                 <StyledImageCell><Image src={product.imageSrc} alt={product.productName} /></StyledImageCell>
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

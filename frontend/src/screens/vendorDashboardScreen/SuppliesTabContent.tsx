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
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledTable = styled(Table)`
  font-weight: bolder;
  border-collapse: separate;
  border-spacing: 0 8px; /* Add spacing between rows */
  border-collapse: separate;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
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
  border-radius: 0 0 10px 10px;
`;

const SuppliesTabContent: React.FC = () => {
  const suppliesData = [
    { serialNumber: 1, productName: 'Tomatoes', quantity: 50, price: 2.5, imageSrc: '/public/Images/Fresh Produce/Tomatoes.jpg' },
    { serialNumber: 2, productName: 'Onions', quantity: 30, price: 1.0, imageSrc: '/public/Images/Fresh Produce/Onions.jpg' },
    { serialNumber: 3, productName: 'Pears', quantity: 20, price: 0.8, imageSrc: '/public/Images/Fresh Produce/Pears.jpg'},
    { serialNumber: 4, productName: 'Chicken', quantity: 10, price: 5.0, imageSrc: '/public/Images/Poultry/Chicken.jpg' },
    { serialNumber: 5, productName: 'Trout', quantity: 15, price: 3.5, imageSrc: '/public/Images/Fish/Trout.jpg' }
  ];

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
              <StyledTableCell>Price (Ksh)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliesData.map((supply) => (
              <TableRow key={supply.serialNumber}>
                <StyledImageCell><Image src={supply.imageSrc} alt={supply.productName} /></StyledImageCell>
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

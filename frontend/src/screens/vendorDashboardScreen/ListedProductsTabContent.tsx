import React from 'react';
import styled from '@emotion/styled';
// import Typography from '@mui/material/Typography';
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
  border-radius: 0 0 10px 10px;
`;

const listedProductsData = [
  { serialNumber: 1, productName: 'Berries', quantity: 50, price: 1.0 , imageSrc: '/public/Images/Fresh Produce/Berries.jpg'},
  { serialNumber: 2, productName: 'Pears', quantity: 50, price: 0.5, imageSrc: '/public/Images/Fresh Produce/Pears.jpg' },
  { serialNumber: 3, productName: 'Chicken',quantity: 50, price: 2.0 , imageSrc: '/public/Images/Poultry/Chicken.jpg'},
  // Add more data...
];

const ListedProductsTabContent: React.FC = () => {
  return (
   <Container>
      
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
            <StyledImageCell></StyledImageCell> {/* Empty cell for images */}
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>Price ($)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listedProductsData.map((product) => (
              <TableRow key={product.serialNumber}>
                 <StyledImageCell><Image src={product.imageSrc} alt={product.productName} /></StyledImageCell>
                <StyledTableCell>{product.serialNumber}</StyledTableCell>
                <StyledTableCell>{product.productName}</StyledTableCell>
                <StyledTableCell>{product.price.toFixed(2)}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
   </Container>
  );
};

export default ListedProductsTabContent;

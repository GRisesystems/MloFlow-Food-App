import styled from '@emotion/styled';
// import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useMemo, useState } from 'react';
// import { MaterialReactTable } from 'material-react-table';

// import Paper from '@mui/material/Paper';
import ProductControllar from '../../components/allProducts/ProductControls';
import UpdateProductForm from '../../components/newproductupload/UpdateProduct';
import axios from 'axios';
import { Button } from '@mui/material';
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


const ListedProductsTabContent: React.FC = () => {
  const [products, setProducts] = useState([])

const getProducts = async () => {
  const response = await axios.get('http://localhost:8000/products/')
    setProducts(response.data)
    console.log(response.data)
  }

  useEffect(() =>{
    getProducts();
  }, [])

     const deleteProduct = async (id) => {
      await axios.delete('http://localhost:8000/products/${id}')

      }
  return (
   <Container>
      
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
            <StyledImageCell></StyledImageCell> {/* Empty cell for images */}
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>Price (Ksh)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                 <StyledImageCell><Image src={product.image} alt={product.name} /></StyledImageCell>
                <StyledTableCell>{product.id}</StyledTableCell>
                <StyledTableCell>{product.name}</StyledTableCell>
                <StyledTableCell>{product.price}</StyledTableCell>
                <StyledTableCell>{product.price}</StyledTableCell>
                <StyledTableCell>
               <UpdateProductForm />
                  </StyledTableCell>
                <StyledTableCell>

                  <Button variant="contained" color="error"     sx={{  padding:'6px', margin:3 }} onClick={deleteProduct}>
                        DELETE
                  </Button>
                  </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
   </Container>
  );
};

export default ListedProductsTabContent;

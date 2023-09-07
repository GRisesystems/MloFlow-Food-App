import styled from '@emotion/styled';
// import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect,  useState } from 'react';
import { useParams } from 'react-router';
// import { MaterialReactTable } from 'material-react-table';

// import Paper from '@mui/material/Paper';

import axios from 'axios';
import { Button, Checkbox} from '@mui/material';
const Container = styled.div`
  padding: 5px;
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
  padding: 8px; /* Adjust padding as needed */
  font-weight: bold;
  width: 60px;
`;
const StyledImageCell = styled(TableCell)`
  padding: 10px;
  width: 60px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;


const SuppliesTabContent: React.FC = () => {
  const [selectedRow, setSelectedRow] = React.useState(-1);
  const [selectProduct, setSelectedProduct] = useState(false);
  const [products, setProducts] = useState([])
  const loadProducts = async () => {    

    const data = await axios.get( `http://localhost:8000/products/`)
      console.log(data.data)
      setProducts(data.data)
    }
  useEffect(() =>{
    loadProducts()
  },[])


  return (
   <Container>
      
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
            <StyledTableCell> Image</StyledTableCell> {/* Empty cell for images */}
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell >Price (Ksh)</StyledTableCell>
                </TableRow>
          </TableHead>
          <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} onClick={() => setSelectedRow(product.id)}>
                 <StyledImageCell><Image src={product.imageOne} alt={product.name} /></StyledImageCell>
                <StyledTableCell>{product.id}</StyledTableCell>
                <StyledTableCell>{product.name}</StyledTableCell>
                <StyledTableCell >{product.price}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
   </Container>
  );
};

export default SuppliesTabContent;

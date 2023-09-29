import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { grey } from '@mui/material/colors'


const ProductTable = ({ product_data }) => {
    console.log(product_data)
    return (
        <Box component={Paper} sx={{ mt: 2, p: 2 }}>
            <Grid container spacing={2}>
                <Grid item sm={12} md={5} xs={12} lg={4}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        products
                    </Typography>
                </Grid>
                <Grid item md={7} sm={12} xs={12}>
                    <Stack direction="row" spacing={2} sx={{ float: 'right' }}>
                        <TextField
                            size='small'
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Search"
                            InputProps={{
                                startAdornment: <SearchOutlinedIcon />,
                            }}
                        />
                        <Button size="small" variant="outlined" sx={{ textTransform: 'none', color: 'gray', borderColor: 'gray' }}>
                            <FilterListOutlinedIcon />    Filter
                        </Button>
                    </Stack>
                </Grid>
                {product_data &&
                    <TableContainer>
                        <Table dense aria-label="Approval table">
                            <TableHead sx={{ backgroundColor: grey[100] }}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Vendor</TableCell>
                                    <TableCell>Initial Stock</TableCell>
                                    <TableCell>Quantity Sold</TableCell>
                                    <TableCell>Available Sock</TableCell>
                                    <TableCell>Price(KES)</TableCell>
                                    {/* <TableCell>Price(KES)</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    product_data.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell>{product.name}</TableCell>
                                            <TableCell>{product.category}</TableCell>
                                            <TableCell>{product.vendor}</TableCell>
                                            <TableCell>{product.initial_stock}</TableCell>
                                            <TableCell>{product.quantity_sold}</TableCell>
                                            <TableCell>{product.available_stock}</TableCell>
                                            <TableCell>{product.price.toLocaleString()}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </Grid>

        </Box>
    )
}

export default ProductTable
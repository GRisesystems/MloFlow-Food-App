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


const CustomerTable = () => {
    return (
        <Box component={Paper} sx={{ mt: 2, p: 2 }}>
            <Grid container spacing={2}>
                <Grid item sm={12} md={5} xs={12} lg={4}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        Customers
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
                        
                    </Stack>
                </Grid>
                <TableContainer>
                    <Table aria-label="Approval table">
                        <TableHead sx={{ backgroundColor: grey[100] }}>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone number</TableCell>
                                <TableCell>Date joined</TableCell>
                                <TableCell>Last login</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Grid>

        </Box>
    )
}

export default CustomerTable
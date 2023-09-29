import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button"
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography, Avatar } from '@mui/material';
import { grey, green } from '@mui/material/colors';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import top_sales from './topsales.json'
import VendorDetailsModal from './VendorDetailsModal';


const TopVendorsTable = ({ vendor_sales }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Top Vendors</Typography>
                <Link to="#" sx={{ textDecoration: 'none' }}>
                    <Typography variant='body1'>view all</Typography>
                </Link>
            </Box>
            <TableContainer>
                <Table size="small" aria-label="a dense table">
                    <TableHead sx={{ backgroundColor: grey[300] }}>
                        <TableRow>
                            {/* <TableCell>name</TableCell> */}
                            <TableCell>vendor</TableCell>
                            <TableCell>Inflow</TableCell>
                            <TableCell>Growth </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {top_sales.map((item) => (
                            <TableRow key={item.id}>
                                {/* <TableCell sx={{ color: grey[700] }}>{item.name}</TableCell> */}
                                <TableCell style={{ width: '200px' }}>
                                    {item.vendor}
                                    {/* <Link to="#">
                                    </Link> */}
                                </TableCell>
                                <TableCell style={{ width: '200px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <LinearProgress variant="determinate" value={item.inflow} sx={{ height: 10, borderRadius: 5, flex: 1, marginRight: 1 }} />
                                        <span>{item.inflow}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{ color: 'green', fontSize: 'inherit' }}
                                        label={
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <ArrowUpwardIcon />

                                                {item.growth}%
                                            </Box>
                                        }
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button onClick={handleOpen} sx={{ textTransform: 'none' }} disableElevation>
                                        details
                                    </Button>

                                </TableCell>
                            </TableRow>
                        ))}
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            maxWidth='md'
                            fullWidth
                            sx={{ borderRadius: 8 }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'end',p:2}}>
                                <CloseIcon
                                onClick={handleClose}
                                sx={{cursor:'pointer',backgroundColor:'white'}}
                                />
                            </Box>
                            <Box sx={{ p: 2, display: 'flex', borderBottom: 1 }}>

                                <Avatar>
                                    {/* image */}
                                </Avatar>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>Vendor details</Typography>

                            </Box>
                            <VendorDetailsModal vendor_sales={vendor_sales} onClose={handleClose} />
                        </Dialog>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}






export default TopVendorsTable
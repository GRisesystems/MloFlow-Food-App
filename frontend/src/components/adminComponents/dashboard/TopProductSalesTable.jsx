import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box, Typography, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import top_sales from './topsales.json'


const TopProductSalesTable = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 0.5 }}>Top product sales</Typography>
            <TableContainer>
                <Table size="small" aria-label="a dense table">
                    <TableHead sx={{backgroundColor:grey[300]}}>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell>vendor</TableCell>
                            <TableCell>Inflow</TableCell>
                            <TableCell>Growth </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {top_sales.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell sx={{ color: grey[700] }}>{item.name}</TableCell>
                                <TableCell style={{ width: '200px' }}>
                                    <Link to="#">
                                        {item.vendor}
                                    </Link>
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TopProductSalesTable
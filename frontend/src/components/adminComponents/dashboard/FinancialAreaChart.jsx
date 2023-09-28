import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { red, green } from '@mui/material/colors';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";


const FinancialAreaChart = () => {
    const data = [
        {
            name: "Jan",
            income: 4000,
            payments: 2400,
        },
        {
            name: "Feb",
            income: 5000,
            payments: 4800,
        },
        {
            name: "Mar",
            income: 6000,
            payments: 3200,
        },
        {
            name: "Apr",
            income: 4500,
            payments: 2800,
        },
        {
            name: "May",
            income: 5500,
            payments: 3400,
        },
        {
            name: "Jun",
            income: 7000,
            payments: 3800,
        },
        {
            name: "Jul",
            income: 8000,
            payments: 4200,
        },
        {
            name: "Aug",
            income: 6500,
            payments: 3500,
        },
        {
            name: "Sep",
            income: 7500,
            payments: 3900,
        },
        {
            name: "Oct",
            income: 9000,
            payments: 4400,
        },
        {
            name: "Nov",
            income: 8200,
            payments: 4100,
        },
        {
            name: "Dec",
            income: 9500,
            payments: 4600,
        },
    ];


    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Financial highlights</Typography>
                <Stack direction='row' spacing={0}>
                    <IconButton size='small' sx={{ fontSize: '16px' }}>
                        <FiberManualRecordIcon sx={{ color: green[500] }} />Income
                    </IconButton>
                    <IconButton size='small' sx={{ fontSize: '16px' }}>
                        <FiberManualRecordIcon sx={{ color: red[500] }} />Payments
                    </IconButton>
                    <IconButton size='small'>
                        <MoreVertIcon />
                    </IconButton>
                </Stack>
            </Box>
            <ResponsiveContainer width={500}
                height={316}>

                <AreaChart
                    width={500}
                    height={316}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <defs>
                        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#008000" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#008000" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ff0000" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ff0000" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} height={1} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="payments"
                        stackId="1"
                        stroke={red[500]}
                        fill="url(#colorExpense)"
                    />
                    <Area
                        type="monotone"
                        dataKey="income"
                        stackId="1"
                        stroke={green[500]}
                        fill="url(#colorIncome)"
                    />

                </AreaChart>
            </ResponsiveContainer>
        </Box>
    )
}

export default FinancialAreaChart
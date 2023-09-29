import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { red, blue, green, yellow } from '@mui/material/colors';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Line,
    ResponsiveContainer
} from "recharts";

const RevenueInsightsLineGraph = ({ revenue_insights_data }) => {
    return (
        <Paper sx={{ p: 0.6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Revenue Insights</Typography>
                <Stack direction='row' spacing={1}>
                    <Chip
                        icon={<FiberManualRecordIcon
                            style={{
                                fontSize: 'inherit',
                                color: yellow[900]
                            }}

                        />}
                        label="Chefs"
                    />
                    <Chip
                        icon={<FiberManualRecordIcon
                            style={{
                                fontSize: 'inherit',
                                color: blue[900]
                            }}

                        />}
                        label="Vendors"
                    />
                    <Chip
                        icon={<FiberManualRecordIcon
                            style={{
                                fontSize: 'inherit',
                                color: green[900]
                            }}

                        />}
                        label="Produce"
                    />
                </Stack>
            </Box>
            {revenue_insights_data && (
                <ResponsiveContainer
                    width="100%"
                    height={316}
                >
                    <LineChart
                        data={revenue_insights_data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }} // Adjust the top margin to center the graph vertically
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line dot={false} type="linear" dataKey="chefs" stroke={yellow[900]} />
                        <Line dot={false} type="linear" dataKey="vendors" stroke={blue[900]} />
                        <Line dot={false} type="linear" dataKey="produce" stroke={green[900]} />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </Paper>
    );
};

export default RevenueInsightsLineGraph;

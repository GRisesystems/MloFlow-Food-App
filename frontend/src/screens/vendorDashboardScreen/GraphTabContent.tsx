import React from 'react';
import styled from '@emotion/styled';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GraphContainer = styled.div`
  padding: 26px;
  display: left;
  
`;

const ChartContainer = styled(Paper)`
  padding: 16px;
  margin-top: 16px;
  font-weight: bold;
  margin-left: 20px;
`;


const salesData = [
  { month: 'Jan', Kamau: 1500, John: 2000 },
  { month: 'Feb', Kamau: 1800, John: 2200 },
  { month: 'Mar', Kamau: 2200, John: 2500 },
  // Add more data...
];

const GraphTabContent: React.FC = () => {
  return (
    <GraphContainer>
    <Typography variant="h5">Vendor Sales Trends</Typography>
    <ChartContainer>
        <LineChart width={600} height={400} data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Kamau" stroke="#8884d8" name="Kamau" />
          <Line type="monotone" dataKey="John" stroke="#82ca9d" name="John" />
        </LineChart>
     </ChartContainer>
     </GraphContainer>
   
  );
};

export default GraphTabContent;

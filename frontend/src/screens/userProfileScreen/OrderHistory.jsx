import React from 'react';
import {
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

const OrderHistory = ({ orderHistory }) => {
  const testOrderHistory = [
    { id: 1, date: '2023-10-10', name: 'Stuff', imageUrl: 'C:/MloFlow-Food-App/frontend/src/screens/userProfileScreen/Tomato.jpg', quantity: 2, total: 1500 },
    { id: 2, date: '2023-10-09', name: 'Order 2', imageUrl: '/path/to/image2.jpg', quantity: 3, total: 7500 },
    { id: 3, date: '2023-10-08', name: 'Order 3', imageUrl: '/path/to/image3.jpg', quantity: 1, total: 2500 },
  ];

  const OrderHistoryData = orderHistory || testOrderHistory;

  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Order History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Image</TableCell>
              <TableCell>Order Name</TableCell>
              <TableCell>Date of Transaction</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {OrderHistoryData.map((order, index) => (
              <TableRow
                key={order.id}
                className={index % 2 === 0 ? 'even-row' : 'odd-row'}
              >
                <TableCell>
                  <img
                    src={order.imageUrl}
                    alt={`Order #${order.id}`}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                </TableCell>
                <TableCell>Customer{order.name}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>50{order.quantity}</TableCell>
                <TableCell>$600{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default OrderHistory;

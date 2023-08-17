import React from 'react';
import { useCart } from '../Cart/CartUtils';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-right: 20px;
`;

const TableHeader = styled.th`
  border-bottom: 2px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 8px;
`;

const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const TotalContainer = styled.div`
  flex: 1;
  text-align: right;
`;

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  // Test data for products
  const testData = [
    { productName: 'Product 1', description: 'Description 1', price: 10.99, quantity: 2 },
    { productName: 'Product 2', description: 'Description 2', price: 19.99, quantity: 1 },
    { productName: 'Product 3', description: 'Description 3', price: 5.99, quantity: 3 },
  ];

  return (
    <CartContainer>
      <CartTable>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader></TableHeader>
          </tr>
        </thead>
        <tbody>
          {testData.map((item) => (
            <TableRow key={item.productName}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.price * item.quantity}</TableCell>
              <TableCell>
                <RemoveButton onClick={() => removeFromCart(item.productName)}>Remove</RemoveButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </CartTable>
      <TotalContainer>
        <h3>Total: ${getTotalPrice()}</h3>
      </TotalContainer>
    </CartContainer>
  );
};

export default Cart;

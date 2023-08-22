import React from 'react';
import { useCart } from '../Cart/CartUtils';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 40px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CartTable = styled.table`
  flex: 1;
  border-collapse: collapse;
  margin-right: 20px;
  font-weight: bolder;
`;

const TableHeader = styled.th`
  border-bottom: 2px solid #ddd;
  padding: 18px;
  text-align: center;
  color: #black;
  font-weight: bold;
  
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  border-bottom: 2px solid #ddd;
  padding: 48px;
`;

const RemoveButton = styled.button`
  border: 2px solid #ddd;
  background-color: transparent;
  color: #FFA000;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
`;

const SummaryContainer = styled.div`
  flex: 1;
  margin-top: 20px;
  margin-left: 80px;
  padding: 20px;
  border: 2px solid #ddd;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const SummaryText = styled.div`
  font-size: 34px;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 50px;
`;

const SummaryTotal = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: orange;
  margin-bottom: 20px;
  margin-left: 60px;
`;

const ProceedButton = styled(Link)`
  background-color: #FFA000;
  color: white;
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: orange;
  }
`;

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = () => {
  const {  removeFromCart } = useCart();

  // Provided product details
  const products = [
    { productName: 'Tomatoes', price: 45.99, quantity: '1 KG', imageSrc: '/public/Images/Fresh Produce/Tomatoes.jpg' },
    { productName: 'Pears', price: 10.99, quantity: '2 KG', imageSrc: '/public/Images/Fresh Produce/Pears.jpg' },
    { productName: 'Chicken', price: 90.99, quantity: '1 KG', imageSrc: '/public/Images/Poultry/Chicken.jpg' },
    { productName: 'Tuna', price: 100.0, quantity: '3 KG', imageSrc: '/public/Images/Fish/Tuna.jpg' },
  ];

  return (
    <CartContainer>
      <CartTable>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader></TableHeader>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <img src={item.imageSrc} alt={item.productName} style={{ width: '100px', height: '80px', marginRight: '5px', marginBottom: '5px' }} />
                <strong>{item.productName}</strong>
              </TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.price * parseFloat(item.quantity)}</TableCell>
              <TableCell>
                <RemoveButton onClick={() => removeFromCart(item.productName)}>Remove</RemoveButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </CartTable>
      <SummaryContainer>
        <SummaryText>Total Items: 4</SummaryText>
        <SummaryTotal>Total Price: $458.96</SummaryTotal>
        <ProceedButton to="/checkout">Proceed to Checkout</ProceedButton>
      </SummaryContainer>
    </CartContainer>
  );
};

export default Cart;

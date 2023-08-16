import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  width:100%;
  background-image: url("/Images/about/backgroundimage.jpeg");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
`;

const TopSection: React.FC = () => (
  <StyledContainer>
    <Typography variant="h4">Mlo Flow</Typography>
  </StyledContainer>
);

export default TopSection;

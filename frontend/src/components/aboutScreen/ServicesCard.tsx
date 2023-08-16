import React from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FullWidthCard = styled(Card)`
  width: 100%;
`;

const FullWidthCardContent = styled(CardContent)`
  // display: flex;
  
`;

const ServicesCard: React.FC = () => (
  <FullWidthCard>
    <FullWidthCardContent>
      <Container sx={{boxShadow: 3}}>
        <Typography variant="h6">
          Card Content
        </Typography>
        <Typography variant="body1" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tempore laboriosam molestiae ipsum veritatis nesciunt. Omnis, ullam! Quam obcaecati itaque assumenda necessitatibus explicabo ipsa, dolores, debitis sequi reprehenderit hic corporis.
        </Typography>
      </Container>
    </FullWidthCardContent>
  </FullWidthCard>
);

export default ServicesCard;

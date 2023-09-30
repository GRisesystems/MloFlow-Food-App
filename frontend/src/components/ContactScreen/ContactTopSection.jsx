import { Box, Container, Typography } from '@mui/material';
import farm_produce from './farm_produce.jpg';


const ContactTopSection = () => {
  return (
    <Box sx={{ height: '45vh' }}>
      <Box
        sx={{
          marginBottom: '120px',
          width: '100vw',
          height: '100%',
          background: `url(${farm_produce}) no-repeat center/cover`,
          position: 'relative',
          overflow: 'hidden',
          
        }}
      >
        <Container sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>
            Contact
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactTopSection;

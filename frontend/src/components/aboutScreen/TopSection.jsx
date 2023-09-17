import { Box, Container, Typography } from '@mui/material';
import backgroundimage from './backgroundimage.jpeg';


const TopSection = () => {
  return (
    <Box sx={{ height: '45vh' }}>
      <Box
        sx={{
          width: '100vw',
          height: '100%',
          background: `url(${backgroundimage}) no-repeat center/cover`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>
            Check Out
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default TopSection;

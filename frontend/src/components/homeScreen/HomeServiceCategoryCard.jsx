import { Paper, Grid, CardContent, CardActions, Button, Typography } from '@mui/material';

const HomeServiceCategoryCard = ({ background_image }) => {
  return (
    <Grid item xs={12} sm={4} sx={{ height: '25vw' }}>
      <Paper
        elevation={3}
        sx={{
          backgroundImage: `url(${background_image})`,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease', // Add transition for smooth zoom effect
          '&:hover': {
            transform: 'scale(1.1)', // Zoom out the background image on hover
          },
        }}
      >
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column',ml:3}}>
          <Typography variant="h5" component="div" sx={{ mt: 3 }}>
            Category
          </Typography>
        </CardContent>
        <CardActions sx={{ml:3}}>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Paper>
    </Grid>
  );
};

export default HomeServiceCategoryCard;

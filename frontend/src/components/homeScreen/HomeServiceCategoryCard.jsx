import { Paper, Grid, CardContent, CardActions, Button, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';

const HomeServiceCategoryCard = ({ background_image,category_name,button_title }) => {
  return (
    <Grid item xs={12} sm={4} sx={{ height: '300px' }}>
      <Paper
        elevation={3}
        sx={{
          backgroundImage: `url(${background_image})`,
          backgroundPosition:'center',
          backgroundSize:'cover',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease', // Add transition for smooth zoom effect
          transform: 'scale(1.1)',
          '&:hover': {
            transform: 'scale(1)', // Zoom out the background image on hover
          },
        }}
      >
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column',ml:3}}>
          <Typography variant="h5" component="div" sx={{ mt: 3, marginLeft:'25%', color:"#fbb31d ", backgroundColor: "black", opacity: 0.6, maxWidth: 'fit-content', padding:'4px 6px'  }}>
            {category_name}
          </Typography>
        </CardContent>
        <CardActions sx={{ml:3}}>
          <Button size="small" sx={{textTransform:'none', backgroundColor:'#fbb31d', color:'#0C0B0B'}} variant="contained">{button_title}</Button>
        </CardActions>
      </Paper>
    </Grid>
  );
};

export default HomeServiceCategoryCard;

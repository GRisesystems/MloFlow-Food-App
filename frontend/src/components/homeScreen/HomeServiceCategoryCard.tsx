import { Paper, Grid, CardContent, CardActions, Button, Typography } from '@mui/material';


interface HomeServiceCategoryCardProps {
  background_image: string; 
  category_name: string; 
  button_title: string; 
}

const HomeServiceCategoryCard : React.FC<HomeServiceCategoryCardProps> = ({ background_image,category_name,button_title }) => {
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
          transform: 'scale(1.1)',
          '&:hover': {
            transform: 'scale(1)', // Zoom out the background image on hover
          },
        }}
      >
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column',ml:3}}>
          <Typography variant="h5" component="div" sx={{ mt: 3,color:"green" }}>
            {category_name}
          </Typography>
        </CardContent>
        <CardActions sx={{ml:3}}>
          <Button size="small" sx={{textTransform:'none'}} color='success' variant="contained">{button_title}</Button>
        </CardActions>
      </Paper>
    </Grid>
  );
};

export default HomeServiceCategoryCard;

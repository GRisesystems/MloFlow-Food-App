import { Paper, Grid, CardContent, CardActions, Button, Typography } from '@mui/material';

const HomeServiceCategoryCard = ({ background_image }) => {
  return (
    <Grid item xs={12} sm={4} sx={{ height: '45vh' }}>
      <Paper elevation={3} sx={{ backgroundImage: `url(${background_image})`, height: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{mt:3}}>
            Category
          </Typography>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardContent>
      </Paper>
    </Grid>
  );
};

export default HomeServiceCategoryCard;

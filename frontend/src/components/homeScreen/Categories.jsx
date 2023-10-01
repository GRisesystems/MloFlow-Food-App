import { Container, Grid, List, Divider, Typography,  Link} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const categories = [
  {
    title: 'Fruits & Vegetables',
    description: ['Nut & Seed', 'Oils',  'Fruits', 'Tomatoes', 'Soup' ],
  },
  {
    title: 'Dairy Products',
    description: ['Cream', 'Butter',  'Fermented', 'Yogurt', 'Cheese' ],
  },
  {
    title: 'Packaged Foods',
    description: ['Cookies', 'Cornmeal', 'French fries', 'Energy bars', 'Flour' ],
  },
  {
    title: 'Beverages',
    description: ['Coffee', 'Juice', 'Tea', 'Fruits', 'Milk'],
  },
  {
    title: 'Health & Wellness',
    description: ['Sea Food', 'Grains', 'Veggies', 'Water', 'Roughages' ],
  },
];
const FoodCategory = () => {

  return (
  <Container
  component='div'
  sx={{
    position:'relative',
  }}
  >
            <Typography variant="h3" sx={{m:3, color:'#0275d8'}}>
         Categories
        </Typography>
        <Divider sx={{width:'90%', marginLeft:5, marginRight:5,  }} />
  <Grid  spacing={0}  sx={{ display: 'flex', flexWrap: 'wrap', }}  >
    {categories.map((category) => (
      <Grid item  key={category.title} sx={{padding: 4,}} >
        <Typography variant="h6" color="#FFF" sx={{backgroundColor:'#FFB31D', padding:'4px 6px', borderRadius:'24px',
        mb:3}} >
          {category.title}
        </Typography>
          {category.description.map((item) => (
            <List sx={{paddingLeft:3,}}>
                <Link  href="#"  sx={{color:"#000",textDecoration: 'none', "&:hover": {color: '#FFB31D' },}} >
                  <ArrowRightIcon sx={{mr:1, color:'#FFB31D',}}/>  {item}
                </Link>
              </List>
          ))}
      </Grid>
    ))}
  </Grid>
  </Container>
  );
}
export default FoodCategory;
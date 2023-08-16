import { Box, Grid, List, Divider, Typography,  Link} from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
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
  {
    title: 'Grocery & Staples',
    description: ['Oatmeal', 'Rice',  'Beans', 'Soy Sauce', 'Spice' ],
  },
  
];
const FoodCategory = () => {

  return (
  <Box
  component='div'
  sx={{
    position:'relative',
    marginTop:'8px',
    width: '100vw',
  }}
  >
            <Typography variant="h3" sx={{m:3,}}>
         Categories
        </Typography>
        <Divider sx={{width:'90vw', marginLeft:5, }} />
  <Grid  spacing={0}  sx={{ display: 'flex', flexWrap: 'wrap', }}  >
    {categories.map((category) => (
      <Grid item  key={category.title} sx={{padding: 4,}} >
        <Typography variant="h6" color="#FFF" sx={{backgroundColor:'#FFA000', padding:'4px 6px', borderRadius:'24px',
        mb:3}} >
          {category.title}
        </Typography>
          {category.description.map((item) => (
            <List sx={{paddingLeft:3,}}>
                <Link  href="#"  sx={{color:"#000",textDecoration: 'none', "&:hover": {color: '#FFA000' },}} >
                  <LocalPizzaIcon sx={{mr:2}}/>  {item}
                </Link>
              </List>
          ))}
      </Grid>
    ))}
  </Grid>
  </Box>
  );
          };
export default FoodCategory;
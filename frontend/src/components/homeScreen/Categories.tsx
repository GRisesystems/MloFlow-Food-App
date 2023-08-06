import { Box, Grid, List, Divider, Typography,  Link} from '@mui/material';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const categories = [
  {
    title: 'Fruits & Vegetables',
    description: [' Nut & Seed', 'Oils',  'Fruits', 'Tomatoes', 'Soup ' ],
  },
  {
    title: 'Dairy Products',
    description: ['Cream', ' Butter',  'Fermented', 'Yogurt', 'Cheese ' ],
  },
  {
    title: 'Packaged Foods',
    description: ['Cookies', ' Cornmeal', ' French fries', ' Energy bars', 'Flour ' ],
  },
  {
    title: 'Beverages',
    description: ['Coffee', ' Juice', 'Tea', ' Fruits', ' Milk', ],
  },
  {
    title: 'Health & Wellness',
    description: ['Sea Food', 'Grains', ' Veggies', 'Water', 'Roughages ' ],
  },
  {
    title: 'Grocery & Staples',
    description: ['Oatmeal', ' Spice', ' Beans', ' Soy Sauce', ' Spice ' ],
  },
  
];
const FoodCategory = () => {

  return (
  <Box
  component='div'
  sx={{
    mt: 4,
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
        <Typography variant="h6" color="#ffb717" >
          {category.title}
        </Typography>
          {category.description.map((item) => (
            <List sx={{paddingLeft:3,}}>
              <Link  href="#"  sx={{color:"#000",textDecoration: 'none', "&:hover": {color: '#ffb717' },}} >
                {/* <ChevronRightIcon /> */}
                {item}
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
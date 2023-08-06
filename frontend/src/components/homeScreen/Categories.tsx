import { Box, Grid, List, Divider, Typography,  Link} from '@mui/material';

const categories = [
  {
    title: 'Fruits & Vegetables',
    description: ['{'>'}  Nut & Seed', '{'>'} Oils', 'Contact us', '{'>'} Fruits', '{'>'} Tomatoes', '{'>'} Soup ' ],
  },
  {
    title: 'Dairy Products',
    description: ['{'>'}  Nut & Seed', '{'>'} Oils', 'Contact us', '{'>'} Fruits', '{'>'} Tomatoes', '{'>'} Soup ' ],
  },
  {
    title: 'Package Foods',
    description: ['{'>'}  Nut & Seed', '{'>'} Oils', 'Contact us', '{'>'} Fruits', '{'>'} Tomatoes', '{'>'} Soup ' ],
  },
  {
    title: 'Beverages',
    description: ['{'>'}  Nut & Seed', '{'>'} Oils', 'Contact us', '{'>'} Fruits', '{'>'} Tomatoes', '{'>'} Soup ' ],
  },
  {
    title: 'Health & Wellness',
    description: ['{'>'}  Nut & Seed', '{'>'} Oils', 'Contact us', '{'>'} Fruits', '{'>'} Tomatoes', '{'>'} Soup ' ],
  },
  {
    title: 'Grocery & Staples',
    description: ['{'>'}  Nut & Seed', '{'>'} Oils', 'Contact us', '{'>'} Fruits', '{'>'} Tomatoes', '{'>'} Soup ' ],
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
            <List>
              <Link href="#"  sx={{color:"#000",textDecoration: 'none', "&:hover": {color: '#ffb717' },}} >
                {item}
              </Link>
              </List>
          ))}
      </Grid>
    ))}
    <Divider orientation="vertical"  flexItem sx={{maxHeight:'150px', marginTop:4,}}/>
  </Grid>
  </Box>
  );
          };
export default FoodCategory;
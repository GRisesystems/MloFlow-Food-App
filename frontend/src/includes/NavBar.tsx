import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Badge, Stack, useMediaQuery, useTheme } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';

const pages = ['Chefs', 'Vendors', 'Farm Produce', 'Blog'];

function NavBar() {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm')); 
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


  // useEffect(() => {
  //   // This will run whenever isMobileView changes
  //   if (isMobileView) {
  //     setShowNavBarDrawer(!showNavBarDrawer)
  //   }
  // }, [isMobileView]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFC107',color:'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{fontWeight:'bold'}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',  "&:hover": { color: "#0b490b", transition: "200ms ease-in" }, }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {isMobileView && 
            <Stack direction='row' spacing={1} sx={{ marginLeft: 'auto',color:'black' }}>
            <IconButton
              size="large"
              aria-label="Cart"
              color="inherit"

            >
              <Badge badgeContent={6} color="error">
                <ShoppingCartCheckoutRoundedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show favourites"
              color="inherit"
              onClick={() => console.log('Profile clicked')}
            >
              <Badge badgeContent={17} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
          </Stack>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;

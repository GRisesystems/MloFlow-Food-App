import React from 'react';
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
import { Badge, Link, Stack, useMediaQuery, useTheme } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import {useLocation} from 'react-router-dom'

const pages = ['Home', 'Chefs', 'Vendors', 'Farm Produce', 'Contact', 'Blog'];

function NavBar() {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const location = useLocation();


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
    <AppBar position="sticky" sx={{ backgroundColor: '#FBB31D', color: '#0C0B0B' }}>
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
                  <Typography textAlign="center" sx={{ fontWeight: 'bold' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ 
                backgroundColor: location.pathname === '/' ? 'white' : 'transparent',
                my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
            >
              Home
            </Button>

            <Link href='/chefs' sx={{              
              textDecoration:'none'}}
              >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ 
                  backgroundColor: location.pathname === '/chefs' ? 'white' : 'transparent',
                  my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
              >
                Chefs
              </Button>
            </Link>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
            >
              Vendors
            </Button>

            <Link href="/farm-produce" style={{ textDecoration: 'none' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ 
                  backgroundColor: location.pathname === '/farm-produce' ? 'white' : 'transparent',
                  my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
              >
                Farm Produce
              </Button>
            </Link>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
            >
              Contact
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
            >
              Blog
            </Button>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  backgroundColor: location.pathname === '/about' ? 'white' : 'transparent',
                   my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
              >
                About
              </Button>
            </Link>
          </Box>
          {isMobileView &&
            <Stack direction='row' spacing={1} sx={{ marginLeft: 'auto', color: 'black' }}>
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

import { useState } from 'react';
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
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Badge, Stack, useMediaQuery, useTheme } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Chefs', 'Vendors', 'Farm Produce', 'Contact', 'Blog'];

function NavBar() {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [produceMenuOpen, setProduceMenuOpen] = useState(false);

  // Step 2: Add an onClick event handler to toggle the produce dropdown menu
  const toggleProduceMenu = () => {
    setProduceMenuOpen(!produceMenuOpen);
  };


  // useEffect(() => {
  //   // This will run whenever isMobileView changes
  //   if (isMobileView) {
  //     setShowNavBarDrawer(!showNavBarDrawer)
  //   }
  // }, [isMobileView]);

  const handleOpenNavMenu = (event) => {
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
            <Link to={'/'} sx={{ textDecoration: 'none', color: 'inherit' }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
            >
              Home
            </Button>
            </Link>
            <Link to={'/chefs'} sx={{ textDecoration: 'none', color: 'inherit' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
              >
                Chefs
              </Button>
            </Link>

            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <Box >
                  <Button {...bindTrigger(popupState)}
                    sx={{
                      my: 2,
                      color: '#0C0B0B',
                      // display: 'block',
                      fontWeight: 'bolder',
                      display: 'flex', // Use flex display
                      alignItems: 'center', // Align items vertically
                      "&:hover": { color: "white", transition: "200ms ease-in" },
                    }}
                  >
                    Products <KeyboardArrowDownIcon />
                  </Button>

                  <Menu
                    {...bindMenu(popupState)}>

                    <MenuItem onClick={popupState.close}>
                      <Link to={"/farm-produce"} sx={{ textDecoration: 'none', color: 'inherit' }}>
                        Farm Produce
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <Link to={"/fish-products"} sx={{ textDecoration: 'none', color: 'inherit' }}>
                        Fish
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <Link to={"/poultry-products"} sx={{ textDecoration: 'none', color: 'inherit' }}>
                        Poultry
                      </Link>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </PopupState>

            <Link to={"/contact"} style={{ textDecoration: 'none' }}>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
              >
                Contact
              </Button>
            </Link>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
            >
              Blog
            </Button>
            <Link to={"/about"} style={{ textDecoration: 'none' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#0C0B0B', display: 'block', fontWeight: 'bolder', "&:hover": { color: "white", transition: "200ms ease-in" }, }}
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

export default NavBar
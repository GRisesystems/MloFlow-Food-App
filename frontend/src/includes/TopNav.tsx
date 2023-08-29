import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';
import { Badge, Button, IconButton, InputBase, Link, Stack } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentsIcon from '@mui/icons-material/Payments';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import { useMediaQuery, useTheme } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardIcon from '@mui/icons-material/Dashboard';
import logo from '../assets/mloflow.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import { useCart } from '../components/homeScreen/Cart/CartUtils'
import { Link as RouterLink } from 'react-router-dom';




const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f1f1f1',
  '&:hover': {
    backgroundColor: '#f1f1f1',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    // width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



export default function ClippedDrawer() {

  const { cart } = useCart(); // Access the cart data
  const { isAuthenticated, logout,first_name, surname } = useAuth();
  console.log('first name')
  console.log(first_name)
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  



  const navigate = useNavigate()

  



  const handleLogin = () => {
    // nagigate to login screen
    navigate('/login')
  }

  const handleLogout = () => {
    // Handle logout fucntionality
    logout()
    setIsDrawerVisible(!isDrawerVisible)
    navigate('/')
  }



  const handleProfileMenuOpen = () => {
    setIsDrawerVisible(!isDrawerVisible)
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar elevation={0} position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
       
          <Link href="/">
            <Box
              component="img"
              sx={{ height: 64 }}
              alt="MloFlow Logo"
              src={logo}
            />
          </Link>
          <Box sx={{ marginLeft: 'auto', width: isMobileView ? '100%' : '50%' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          {isMobileView ?
            (
              <>
                <IconButton
                  size="large"
                  aria-label="user Profile"
                  color="inherit"
                  aria-haspopup="true"
                  onClick={() => console.log('mobile menu')}
                >
                  <Badge >
                    <MoreHorizIcon />
                  </Badge>
                </IconButton>
              </>
            )
            :
            (
              <Stack direction='row' spacing={1} sx={{ marginLeft: 'auto' }}>
                <>
                  {isAuthenticated ? (
                    <IconButton
                      size="large"
                      aria-label="user Profile"
                      color="inherit"
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                    >
                      <Badge >
                        <AccountCircle />
                      </Badge>
                      <Typography variant="body1">{first_name} {surname}</Typography>
                    </IconButton>
                  ) : (

                    <Button onClick={handleLogin}>Log In</Button>


                  )}
                  {/* <IconButton
                      size="large"
                      aria-label="user Profile"
                      color="inherit"
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                    >
                      <Badge >
                        <AccountCircle />
                      </Badge>
                      <Typography variant="body1">Isaac Kamula</Typography>
                    </IconButton> */}

                  <IconButton
                    size="large"
                    aria-label="Cart"
                    color="inherit"
                  >
                    <Link to="/cart" component={RouterLink} color="inherit" underline="none">
                      <IconButton size="large" aria-label="Cart" color="inherit">
                        <Badge badgeContent={cart.reduce((total, item) => total + item.quantity, 0)} color="error">
                          <ShoppingCartCheckoutRoundedIcon />
                        </Badge>
                      </IconButton>
                    </Link>
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

                </>
              </Stack>
            )

          }


        </Toolbar>
      </AppBar>
      {isDrawerVisible && (
        <Drawer
          variant="permanent"
          anchor='right'
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary='Profile' />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary='Dashboard' />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PaymentsIcon />
                  </ListItemIcon>
                  <ListItemText primary='Payments' />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SupportAgentIcon />
                  </ListItemIcon>
                  <ListItemText primary='Help & Support' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={handleLogout}>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary='Logout' />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          
        </Drawer>
      )}
    </Box>
    
  );
}
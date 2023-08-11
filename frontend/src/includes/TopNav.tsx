import { useState, useEffect } from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardIcon from '@mui/icons-material/Dashboard';
import logo from '../assets/mloflowlogo.jfif'


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
    width: 'auto',
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
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [showProfileIcon, setshowProfileIcon] = useState(false);
  const [mobileMenuIcon, setshowmobileMenuIcon] = useState(false);

  useEffect(() => {
    // This will run whenever isMobileView changes
    if (isMobileView) {
      setshowmobileMenuIcon(!mobileMenuIcon)
    }
  }, [isMobileView]);

  const handleLogin = () => {
    // Login function to redirect to sign up and login page
    console.log('')
  }

  const handleLogout = () => {
    // Handle logout fucntionality
    setIsDrawerVisible(!isDrawerVisible)
    setshowProfileIcon(!setshowProfileIcon)
  }



  const handleProfileMenuOpen = () => {
    setIsDrawerVisible(!isDrawerVisible)
  }

  const handleDrawerOpen = () => {
    setIsDrawerVisible(true)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar elevation={0} position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <Link href="/">
            <Box
              component="img"
              sx={{ height: 54 }}
              alt="MloFlow Logo"
              src={logo}
            />
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {isMobileView ?
            (
              <>
                <IconButton
                  size="large"
                  aria-label="user Profile"
                  color="inherit"
                  aria-haspopup="true"
                  onClick={()=>console.log('mobile menu')}
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
                  {showProfileIcon ? (
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
                      <Typography variant="body1">Isaac Kamula</Typography>
                    </IconButton>
                  ) : (

                    <Button onClick={handleLogin}>Log In</Button>

                  )}
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
import React, { useState } from 'react'; // Make sure to import React
import { Toolbar, Typography, Avatar, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useNavigate } from 'react-router-dom'
import { useTheme } from "@mui/material/styles";
import { useSignOut } from 'react-auth-kit'


const TopNav = ({ title, handleDrawerToggle }) => {    
    const signOut = useSignOut()
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate()
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
    const mobile_background_color = 'orange';

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        signOut()
        setAnchorEl(null);
        navigate('/')
    }
    return (
        <Toolbar sx={{
            backgroundColor: isSmallScreen ? mobile_background_color : 'white',

        }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' }, color: 'black' }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'black' }}>
                {isSmallScreen ? 'Ceton' : title}
            </Typography>

            <IconButton color="inherit" onClick={handleMenuOpen} sx={{ color: isSmallScreen ? 'white' : '#595959' }}>
                <NotificationsNoneOutlinedIcon />
            </IconButton>

            <IconButton color="inherit" onClick={handleMenuOpen} >
                <Avatar variant='square' sx={{ borderRadius: 2 }}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography variant='body1' sx={{ ml: 1, color: isSmallScreen ? 'white' : 'black' }}>
                    John Doe <KeyboardArrowDownIcon />
                </Typography>
            </IconButton>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </Toolbar>
    )
}

export default TopNav
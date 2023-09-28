import Toolbar from '@mui/material/Toolbar';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import WalletIcon from '@mui/icons-material/Wallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useLocation } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import { HiOutlineUserGroup } from 'react-icons/hi';
import { GrTransaction } from 'react-icons/gr';
import { LiaUsersSolid } from 'react-icons/lia';
import { BiSolidUser } from 'react-icons/bi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { LuChefHat } from 'react-icons/lu';




import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Typography,
    Divider,
    Chip,
} from "@mui/material"
import { Link } from "react-router-dom";


const SideBar = () => {
    const location = useLocation();
    const isChefActive = location.pathname.includes('chefs');
    const isVendorsActive = location.pathname.includes('vendors');
    const isPaymentsActive = location.pathname.includes('payments');
    const isUsersActive = location.pathname.includes('users');
    const isTransactionsActive = location.pathname.includes('transactions');
    const isProfileActive = location.pathname.includes('profile');
    const theme = useTheme();
    const bluePrimaryColor = theme.components.MuiPaper.styleOverrides.sidebar.backgroundColor;
    const orangePrimaryColor = theme.components.MuiPaper.styleOverrides.sidebar.backgroundColor;
    const blackColor = "black"
    const whiteColor = "white"
    const minHeight = theme.components.MuiPaper.styleOverrides.sidebar.minHeight;
    return (
        <Box
            sx={{
                minHeight: minHeight,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                backgroundColor: orangePrimaryColor
            }}
        >
            <Box>
                <Toolbar sx={
                    { p: 0 }
                }>
                    <IconButton sx={{ color: bluePrimaryColor }}>
                        <AccountBalanceIcon />
                    </IconButton>
                    <Typography sx={{ color: 'black' }} variant="h6" noWrap component="div">
                        Ceton
                    </Typography>
                </Toolbar>
                <List dense sx={{ p: 1 }}>
                    <ListItem disablePadding>
                        <Link to="/admin" style={{ textDecoration: 'none', color: whiteColor, width: '100%' }}>
                            <ListItemButton
                                className='noHover'
                                sx={{
                                    borderRadius: 2,
                                    color: '#3399FF',
                                    backgroundColor: location.pathname === '/admin' ? 'white' : 'transparent',
                                }}
                            >
                                <ListItemIcon sx={{ color: location.pathname === '/admin' ? blackColor : blackColor }}>
                                    <AiOutlinePieChart style={{ fontSize: 24, fontWeight: 'bold' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        color: location.pathname === '/admin' ? blackColor : blackColor
                                    }} variant="body1">
                                        Dashboard
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link to="/admin/chefs" style={{ textDecoration: 'none', color: 'white', width: '100%' }}>
                            <ListItemButton
                                className='noHover'
                                sx={{
                                    borderRadius: 2,
                                    color: blackColor,
                                    backgroundColor: isChefActive ? whiteColor : 'transparent',
                                }}
                            >
                                <ListItemIcon sx={{ color: blackColor }}>
                                    <LuChefHat style={{ fontSize: 24, fontWeight: 'bold' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        color: blackColor
                                    }} variant="body1">
                                        Chefs
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link to="/admin/vendors" style={{ textDecoration: 'none', color: 'white', width: '100%' }}>
                            <ListItemButton
                                className='noHover'
                                sx={{
                                    borderRadius: 2,
                                    color: blackColor,
                                    backgroundColor: isVendorsActive ? whiteColor : 'transparent',
                                }}
                            >
                                <ListItemIcon sx={{ color: blackColor }}>
                                    <HiOutlineUserGroup style={{ fontSize: 24, fontWeight: 'bold' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        color: blackColor
                                    }} variant="body1">
                                        Vendors
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link to="/admin/users" style={{ textDecoration: 'none', color: 'white', width: '100%' }}>
                            <ListItemButton
                                className='noHover'
                                sx={{
                                    borderRadius: 2,
                                    color: blackColor,
                                    backgroundColor: isUsersActive ? whiteColor : 'transparent',
                                }}
                            >
                                <ListItemIcon sx={{ color: blackColor }}>
                                    <LiaUsersSolid style={{ fontSize: 24, fontWeight: 'bold' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        color: blackColor
                                    }} variant="body1">
                                        Registered users
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>


                    <ListItem disablePadding>
                        <Link to="/admin/transactions" style={{ textDecoration: 'none', color: 'white', width: '100%' }}>
                            <ListItemButton
                                className='noHover'
                                sx={{
                                    borderRadius: 2,
                                    color: blackColor,
                                    backgroundColor: isTransactionsActive ? whiteColor : 'transparent',
                                }}
                            >
                                <ListItemIcon sx={{ color: blackColor }}>
                                    {/* <GoStack style={{ fontSize: 24 }} /> */}
                                    <GrTransaction style={{ fontSize: 24 }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        color: blackColor
                                    }} variant="body1">
                                        Transactions
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link to="/admin/profile" style={{ textDecoration: 'none', color: 'white', width: '100%' }}>
                            <ListItemButton
                                className='noHover'
                                sx={{
                                    borderRadius: 2,
                                    color: blackColor,
                                    backgroundColor: isProfileActive ? whiteColor : 'transparent',
                                }}
                            >
                                <ListItemIcon sx={{ color: blackColor }}>
                                    <BiSolidUser style={{ fontSize: 24, fontWeight: 'bold' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        color: blackColor
                                    }} variant="body1">
                                        Profile
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Box>

            {/* Bottom list */}
            <List dense sx={{ p: 1 }}>
                <ListItem disablePadding sx={{ mt: 1, p: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Stack direction='row' spacing={1}>
                            <Avatar>
                            </Avatar>
                            <Box sx={{ color: blackColor }}>
                                <Typography variant='body1'>
                                    John Doe
                                </Typography>
                                <Typography variant='body2'>
                                    johndoe@gmail.com
                                </Typography>
                            </Box>
                        </Stack>
                        <LogoutIcon sx={{ color: blackColor, fontSize: 'inherit' }} />
                    </Box>
                </ListItem>
            </List>
        </Box>
    )
}

export default SideBar
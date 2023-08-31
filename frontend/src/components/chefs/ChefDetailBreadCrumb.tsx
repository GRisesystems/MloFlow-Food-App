import { Box, Link, Breadcrumbs, Typography } from '@mui/material';

const ChefDetailBreadCrumb = () => {
    return (
        <Box role="presentation">
            <Breadcrumbs aria-label="breadcrumb" sx={{m:2}}>
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/chefs"
                >
                    Chefs
                </Link>
                <Typography color="text.primary">Satoshi Nakamoto</Typography>
            </Breadcrumbs>
        </Box>
    )
}

export default ChefDetailBreadCrumb
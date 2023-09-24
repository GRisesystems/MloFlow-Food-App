import { Box, Container, CssBaseline, Grid } from "@mui/material"
import ChefDetailsCard from "../../components/chefs/ChefDetailsCard"
import ChefDetailsContent from "../../components/chefs/ChefDetailsContent"
// import ChefDetailBreadCrumb from "../../components/chefs/ChefDetailBreadCrumb"

const ChefDetailScreen = () => {
    return (
        <Box sx={{ minHeight: '80vh' }}>
            <CssBaseline />
            <Container sx={{ mt: 2 }}>
                {/* <ChefDetailBreadCrumb /> */}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <ChefDetailsCard />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <ChefDetailsContent />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ChefDetailScreen
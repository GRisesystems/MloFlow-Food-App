import TopSection from "../../components/aboutScreen/TopSection"
import ServicesCard from "../../components/aboutScreen/ServicesCard"
import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material"

const AboutScreen = () => {
  return (
    <Box>
      <CssBaseline/>
      <TopSection />
      <Container sx={{mt:3}}>
        <Box sx={{textAlign:'center'}}>
          <Typography variant="h6" >About</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam reprehenderit nam, numquam ad dolor accusamus culpa. Rem nihil nam ab, laborum commodi, at soluta iusto, ipsum voluptatibus culpa aut.
          </Typography>
        </Box>
        <Grid container spacing={7}>
          <ServicesCard/>
          <ServicesCard/>
          <ServicesCard/>
        </Grid>      
      </Container>
    </Box>
  )
}

export default AboutScreen
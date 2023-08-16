import TopSection from "../../components/aboutScreen/TopSection"
import ServicesCard from "../../components/aboutScreen/ServicesCard"
import { Box, Container } from "@mui/material"

const AboutScreen = () => {
  return (
    <Box>
        <TopSection/>
        <Container sx={{boxShadow: 3,mt:3}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ipsa dolor beatae! Debitis aut optio quae incidunt voluptatibus eum, nihil exercitationem aperiam possimus nesciunt, placeat voluptatem omnis, doloribus pariatur fugiat?</Container>
        <Box>
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
        </Box>
    </Box>
  )
}

export default AboutScreen
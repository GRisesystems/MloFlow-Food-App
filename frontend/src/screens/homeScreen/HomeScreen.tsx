import { Container,Grid } from '@mui/material'
import HomeCarousel from '../../components/homeScreen/HomeCarousel'
import './home.css'
import HomeServiceCategoryCard from '../../components/homeScreen/HomeServiceCategoryCard'

import chef1 from '../../assets/carousel/chef1.jpg';
import farmproducts from '../../assets/carousel/farmproducts.jpg';
import food1 from '../../assets/carousel/food1.jpg';


const HomeScreen = () => {
    // Home Screen 
    const images = [chef1, farmproducts, food1];
    return (
        <div>            
            <HomeCarousel/>  
            <Container sx={{mt:3}}>
                <Grid container spacing={5}>
                    {
                       images.map((image, index)=>(
                            <HomeServiceCategoryCard key={index} background_image = {image}/>                        
                       )) 
                    }
                </Grid>            
            </Container>          
        </div>
    )
}

export default HomeScreen
import { Link } from 'react-router-dom';
import { Container, Grid, Box,CssBaseline } from "@mui/material";
import HomeCarousel from "../../components/homeScreen/HomeCarousel";
import HomeServiceCategoryCard from "../../components/homeScreen/HomeServiceCategoryCard";
import Wrapper from "../../components/homeScreen/Wrapper";
import './home.css';
import chef1 from '../../assets/carousel/chef1.jpg';
import farmproducts from '../../assets/carousel/variety.jpg';
import food1 from '../../assets/carousel/delivery.png';
// import FoodCategory from "../../components/homeScreen/Categories";
import Faqs from '../../components/homeScreen/Faqs';
import Newsletter from "../../components/homeScreen/Newsletter";
import FishSlider from "../../components/homeScreen/FishSlider";
import PoultrySlider from "../../components/homeScreen/PoultrySlider";
import FramSlider from "../../components/homeScreen/FarmSlider";


const HomeScreen = () => {
 
  const categories = [{"image":chef1,name:"Chefs",btn_title:'Hire now'},{"image":farmproducts, name:"Fresh Produce",btn_title:'Shop now'},{"image":food1,name:"Food Delivery",btn_title:'Shop now'}];

  return (
    // <Box sx={{display:"flex"}}> flexible container
    <Box>
      <CssBaseline/>
      <HomeCarousel />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={7}>
          {categories.map((category, index) => (
            <HomeServiceCategoryCard key={index} background_image={category.image} category_name={category.name} button_title={category.btn_title} />
          ))}
        </Grid>
      </Container>
      <Box>


     <Container>
  <h1 style={{ color: '#0275d8', fontSize: '1.8rem', display: 'flex', justifyContent: 'space-between', padding: '35', marginLeft: 30, marginTop: 40}}>
    Farm Produce
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '20px' }}>
      <ul style={{ listStyleType: 'circle', margin: 0, padding: 5, display: 'flex', gap: '40px', fontSize: '1.05rem', alignItems: 'center' }}>
        <li>Vegetables</li>
        <li>Fruits</li>
        <li>Grains</li>
        <li>Beans</li>
      </ul>

      <Link to='/farm-produce' style={{ textDecoration: 'none' }}>
  <button style={{ backgroundColor: 'transparent', color:  '#fbb31d', border: 'none', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 700, display: 'flex', alignItems: 'center' }}>
    Shop All
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
  </button>
</Link>
    </div>
  </h1>
</Container>
<Container>
    <FramSlider  />
</Container>

      </Box>  
      <Container>
  <h1 style={{ color: '#0275d8', fontSize: '1.8rem', display: 'flex', justifyContent: 'space-between', padding: '5', marginLeft: 30, marginTop: 40}}>
    Fish
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '20px' }}>
      <ul style={{ listStyleType: 'circle', margin: 0, padding: 5, display: 'flex', gap: '40px', fontSize: '1.05rem', alignItems: 'center' }}>
      <li>Freshwater Fish</li>
        <li>Saltwater Fish</li>
      </ul>

      <Link to='/fish-products' style={{ textDecoration: 'none' }}>
  <button style={{ backgroundColor: 'transparent', color:  '#fbb31d', border: 'none', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
    Shop All
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
  </button>
</Link>
    </div>
  </h1>
</Container>
      <Box>
      <Container>
        <FishSlider/>
      </Container>
</Box>
<Box>
<Container>
  <h1 style={{ color: '#0275d8', fontSize: '1.8rem', display: 'flex', justifyContent: 'space-between', padding: '5', marginLeft: 30, marginTop: 40}}>
    Poultry
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '20px' }}>
      <ul style={{ listStyleType: 'circle', margin: 0, padding: 5, display: 'flex', gap: '40px', fontSize: '1.05rem', alignItems: 'center' }}>
       <li>Chicken</li>
       <li>Poultry</li>
       <li>Wild birds</li>
        
      </ul>

      <Link to='/poultry-products' style={{ textDecoration: 'none' }}>
  <button style={{ backgroundColor: 'transparent', color:  '#fbb31d', border: 'none', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
    Shop All
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
  </button>
</Link>
    </div>
  </h1>
</Container>
       <Container>
          <PoultrySlider />
       </Container>
      </Box>
     
      {/* <FoodCategory />       */}
      <Faqs />
      <Wrapper />
      <Newsletter />
    </Box>
  );
};

export default HomeScreen;
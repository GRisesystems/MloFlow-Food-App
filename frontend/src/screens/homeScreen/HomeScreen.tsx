// import React from "react";
import styled from "styled-components";
                import { Container, Grid, Box,CssBaseline } from "@mui/material";
import HomeCarousel from "../../components/homeScreen/HomeCarousel";
import HomeServiceCategoryCard from "../../components/homeScreen/HomeServiceCategoryCard";
import { ProductItem } from "../../components/homeScreen/productItem";
import FlashCard from "../../components/homeScreen/Flashcard";
import Wrapper from "../../components/homeScreen/Wrapper";
import './home.css';
import chef1 from '../../assets/carousel/chef1.jpg';
import farmproducts from '../../assets/carousel/farmproducts.jpg';
import food1 from '../../assets/carousel/food1.jpg';
import FoodCategory from "../../components/homeScreen/Categories";
import Subscription from "../../components/homeScreen/Subscribe";
import Fish from "../../components/homeScreen/Fish";
import Poultry from "../../components/homeScreen/Poultry";

const dummyProductItems: ProductItem[] = [
  {
    id: 1,
    name: 'Tomatoes',
    price: 19.99,
    discount: 5,
    cover: '/Images/Fresh Produce/Tomatoes.jpg',
  },
  {
    id: 2,
    name: 'Pears',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/Images/Fresh Produce/Pears.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 3,
    name: 'Berries',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/Images/Fresh Produce/Berries.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 4,
    name: 'Onions',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/Images/Fresh Produce/Onions.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 5,
    name: 'Carrots',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/Images/Fresh Produce/Carrots.jpg', // Add the URL or path to the product cover image
  },
]


const fishData: ProductItem[] = [
  {
    id: 1,
    name: 'Sardines',
    price: 19.99,
    discount: 5,
    cover: '/Images/Fish/Sardines.jpg',
  },
  {
    id: 2,
    name: 'Sea Bass',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/Images/Fish/SeaBass.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 3,
    name: 'Cod',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/Images/Fish/Cod.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 4,
    name: 'Trout',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/Images/Fish/Trout.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 5,
    name: 'Tuna',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/Images/Fish/Tuna.jpg', // Add the URL or path to the product cover image
  },
  
 
];
const poultryData: ProductItem[] = [
  {
    id: 1,
    name: 'Chicken',
    price: 19.99,
    discount: 5,
    cover: '/Images/Poultry/Chicken.jpg',
  },
  {
    id: 2,
    name: 'Turkey',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/Images/Poultry/Turkey.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 3,
    name: 'Quail',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/Images/Poultry/Quail.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 4,
    name: 'Duck',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: 'Images/Poultry/Duck.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 5,
    name: 'Pheasant',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/Images/Poultry/Pheasant.jpg', // Add the URL or path to the product cover image
  },
  
 
  
];

const PageContainer = styled.div`
background-color: #F5F5F5; // Set your desired background color here

`;

const HomeScreen = () => {
  const categories = [{"image":chef1,name:"Chefs",btn_title:'Request now'},{"image":farmproducts, name:"Fresh Produce",btn_title:'Order now'},{"image":food1,name:"Food Delivery",btn_title:'Order now'}];

  return (
    // <Box sx={{display:"flex"}}> flexible container
    <Box>
      <CssBaseline/>
      <HomeCarousel />
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={7}>
          {categories.map((category, index) => (
            <HomeServiceCategoryCard key={index} background_image={category.image} category_name={category.name} button_title={category.btn_title}/>
          ))}
        </Grid>
      </Container>
      <Box>


     <Box>
  <h1 style={{ color: 'green', fontSize: '24px', display: 'flex', justifyContent: 'space-between' }}>
    Farm Produce
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '20px' }}>
      <ul style={{ listStyleType: 'circle', margin: 0, padding: 5, display: 'flex', gap: '40px', fontSize: '16px', alignItems: 'center' }}>
        <li>Vegetables</li>
        <li>Fruits</li>
        <li>Grains</li>
        <li>Beans</li>
      </ul>
      <button style={{ backgroundColor: 'transparent', color:  '#FFA000', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
        Shop Here
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </div>
  </h1>
</Box>




        <FlashCard productItems={dummyProductItems} />
        
      </Box>  
      <Box>
      <h1 style={{ color: 'green' }}>Fish</h1>  
      <Fish productItems={fishData} fishData={[]} />
</Box>
<Box>
        <h1 style={{ color: 'green' }}>Poultry</h1>
        <Poultry productItems={poultryData} poultryData={[]} />
      </Box>
      <PageContainer>
        <Wrapper />
       
      </PageContainer>   
      <Subscription />
      <FoodCategory />      
    </Box>
  );
};

export default HomeScreen;
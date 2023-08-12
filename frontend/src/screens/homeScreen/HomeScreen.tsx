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
    cover: '/src/assets/images/Fresh Produce/Tomatoes.jpg',
  },
  {
    id: 2,
    name: 'Pears',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Fresh Produce/Pears.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 3,
    name: 'Berries',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Fresh Produce/Berries.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 4,
    name: 'Onions',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Fresh Produce/Onions.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 5,
    name: 'Carrots',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Fresh Produce/Carrots.jpg', // Add the URL or path to the product cover image
  },
]


const fishData: ProductItem[] = [
  {
    id: 1,
    name: 'Sardines',
    price: 19.99,
    discount: 5,
    cover: '/src/assets/images/Fish/Sardines.jpg',
  },
  {
    id: 2,
    name: 'Sea Bass',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Fish/SeaBass.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 3,
    name: 'Cod',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Fish/Cod.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 4,
    name: 'Trout',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Fish/Trout.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 5,
    name: 'Tuna',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Fish/Tuna.jpg', // Add the URL or path to the product cover image
  },
  
 
];
const poultryData: ProductItem[] = [
  {
    id: 1,
    name: 'Chicken',
    price: 19.99,
    discount: 5,
    cover: '/src/assets/images/Poultry/Chicken.jpg',
  },
  {
    id: 2,
    name: 'Turkey',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Poultry/Turkey.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 3,
    name: 'Quail',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Poultry/Quail.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 4,
    name: 'Duck',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Poultry/Duck.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 5,
    name: 'Pheasant',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Poultry/Pheasant.jpg', // Add the URL or path to the product cover image
  },
  
 
  
];

const PageContainer = styled.div`
background-color: #F5F5F5; // Set your desired background color here

`;

const HomeScreen = () => {
  const categories = [{"image":chef1,name:"Chefs"},{"image":farmproducts, name:"Farm Produce"},{"image":food1,name:"Food Delivery"}];

  return (
    // <Box sx={{display:"flex"}}> flexible container
    <Box>
      <CssBaseline/>
      <HomeCarousel />
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={7}>
          {categories.map((category, index) => (
            <HomeServiceCategoryCard key={index} background_image={category.image} category_name={category.name}/>
          ))}
        </Grid>
      </Container>
      <Box>
        <h1 style={{ color: 'green' }}>Fresh Produce</h1>
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
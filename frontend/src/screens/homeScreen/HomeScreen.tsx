// import React from "react";
import styled from "styled-components";
import { Container, Grid, Box } from "@mui/material";
import HomeCarousel from "../../components/homeScreen/HomeCarousel";
import HomeServiceCategoryCard from "../../components/homeScreen/HomeServiceCategoryCard";
import { ProductItem } from "../../components/homeScreen/productItem";
import FlashCard from "../../components/homeScreen/Flashcard";
import Wrapper from "../../components/homeScreen/Wrapper";
import './home.css';
import chef1 from '../../assets/carousel/chef1.jpg';
import farmproducts from '../../assets/carousel/farmproducts.jpg';
import food1 from '../../assets/carousel/food1.jpg';

const dummyProductItems: ProductItem[] = [
  {
    id: 1,
    name: 'Tomatoes',
    price: 19.99,
    discount: 5,
    cover: '/src/assets/images/Tomatoes.jpg',
  },
  {
    id: 2,
    name: 'Pears',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Pears.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 3,
    name: 'Berries',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Berries.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 4,
    name: 'Onions',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Onions.jpg', // Add the URL or path to the product cover image
  },
  {
    id: 4,
    name: 'Carrots',
    price: 29.99,
    discount: 10, // Add a discount value
    cover: '/src/assets/images/Carrots.jpg', // Add the URL or path to the product cover image
  },
]

const PageContainer = styled.div`
background-color: #faeda5; // Set your desired background color here

`;

const HomeScreen = () => {
  const images = [chef1, farmproducts, food1];

  return (
    <div>
      <HomeCarousel />
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={5}>
          {images.map((image, index) => (
            <HomeServiceCategoryCard key={index} background_image={image} />
          ))}
        </Grid>
      </Container>
      <Box>
        <h1 style={{ color: 'green' }}>Shop Here</h1>
        <FlashCard productItems={dummyProductItems} />
      </Box>
      <PageContainer>
        <Wrapper />
      </PageContainer>
      
    </div>
  );
};

export default HomeScreen;
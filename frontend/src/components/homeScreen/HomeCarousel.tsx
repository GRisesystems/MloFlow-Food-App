import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography, Box } from '@mui/material';
import chef1 from '../../assets/carousel/chef1.jpg';
import farmproducts from '../../assets/carousel/farmproducts.jpg';
import food1 from '../../assets/carousel/food1.jpg';

interface CarouselSlideProps {
  image: string;
}

const HomeCarousel: React.FC = () => {
  const images = [chef1, farmproducts, food1];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    fade: true, // Enable fade effect
    appendDots: (dots: React.ReactNode) => (
      <Box
        sx={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul style={{ margin: '0', padding: '0', listStyle: 'none', display: 'flex' }}>
          {React.Children.map(dots, (dot, index) => (
            <li
              key={index}
              style={{
                display: 'block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: index === 0 ? '#fff' : 'green', // Make the first dot white, and the rest green
                margin: '0 4px',
                cursor: 'pointer',
              }}
            />
          ))}
        </ul>
      </Box>
    ),
  };

  return (
    <Box width="100%" height="300px" overflow="hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <CarouselSlide key={index} image={image} />
        ))}
      </Slider>
    </Box>
  );
};

const CarouselSlide: React.FC<CarouselSlideProps> = ({ image }) => {
  return (
    <Box position="relative" width="100%" height="100%">
      <img src={image} alt={`Image ${image}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <Box position="absolute" top={0} left={0} padding={2} color="#fff">
        <Typography variant="h5">Image Carousel</Typography>
        <Typography variant="body1">This is a simple image carousel with buttons and text above the images.</Typography>
      </Box>
    </Box>
  );
};

export default HomeCarousel;

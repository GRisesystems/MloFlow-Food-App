import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography, Box, Button} from '@mui/material';
import chef1 from '../../assets/carousel/chef1.jpg';
import farmproducts from '../../assets/carousel/farmproducts.jpg';
import food1 from '../../assets/carousel/food1.jpg';
import { Link } from 'react-router-dom';


const HomeCarousel = () => {
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
    appendDots: (dots) => (
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
          {React.Children.map(dots, (_, index) => (
            <li
              key={index}
              style={{
                display: 'block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: index === 0 ? '#FFB31D' : '#FFB31D', // Make the first dot white, and the rest green
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
    <Box width="100%" height="400px" overflow="hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <CarouselSlide key={index} image={image} />
        ))}
      </Slider>
    </Box>
  );
};

const CarouselSlide = ({ image }) => {
  return (
    <Box position="relative" width="100%" height="400px"> {/* Set a fixed height for the carousel */}
      <img src={image} alt={`Image ${image}`} style={{ width: '100%', height: '100%', objectFit: 'cover',  }} />
      <Box 
        position="absolute"
        width="50%"
        display="flex"
        flexDirection="column"
        // justifyContent="flex-end"
        p={2}
        bgcolor="rgba(34,34,34, 0.5)"
        color="#fbb31d"
        textAlign="center"
        sx={{top:100, left:'25%' }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, }}>Welcome to Mloflo, Kenya's Exclusive  Shop for freshly supplied  food stuff.</Typography>
        <Box mt={2}>
          <Link to={"/products"}>
          <Button variant="contained" sx={{backgroundColor:'#fbb31d', color:'#0C0B0B'}}>
            Shop Now
          </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};


export default HomeCarousel;

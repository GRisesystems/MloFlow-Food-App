import React from 'react';
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import WishlistBtn from '../homeScreen/WishlistBtn';
import { useCart } from '../homeScreen/Cart/CartUtils'
import { ProductItem } from './productItem';





const AddToCartButtonText = styled.span`
  display: ;
  margin: 5px;
  color: white;
  font-size: 13px;
  font-weight:bold;
  @media (max-width: 768px) {
    margin-right: 20px; /* Add some space between button and price */
  }
 
`;
const AddToCartButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 13px;  
  right: 25px;
  padding: 4px;
  background-color: #FFA000;
  width: auto; 
  height: 20px;
  padding:0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  z-index: 1; /* Ensure the button is above the flashcard content */
  opacity: 0.8; /* Adjust the opacity to make it slightly visible */
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1; /* Show the button fully on hover */
  }
  @media (max-width: 768px) {
    margin-top: 10px; /* Add some space between button and price */
  }

 
`;

const NextArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background-color: #FFA000; /* Yellow-green background color */
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index:2;

  &:hover {
    background-color: #d5b542; /* Darker shade on hover */
  }
`;

const PrevArrowButton = styled.button`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background-color: #FFA000; /* Yellow-green background color */
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #d5b542; /* Darker shade on hover */
  }
`;

const NextArrowIcon = styled(ChevronRightIcon)`
  width: 20px;
  height: 20px;
  fill: white;
`;

const PrevArrowIcon = styled(ChevronLeftIcon)`
  width: 20px;
  height: 20px;
  fill: white;
`;

interface SampleNextArrowProps {
  onClick: () => void;
}

const SampleNextArrow: React.FC<SampleNextArrowProps> = ({ onClick }) => {
  return (
    <NextArrowButton onClick={onClick}>
    <NextArrowIcon />
  </NextArrowButton>
);
};
    

interface SamplePrevArrowProps {
  onClick: () => void;
}

const SamplePrevArrow: React.FC<SamplePrevArrowProps> = ({ onClick }) => {
  return (
    <PrevArrowButton onClick={onClick}>
      <PrevArrowIcon />
    </PrevArrowButton>
  );
};

interface FlashCardProps {
  productItems: ProductItem[];
}

const FlashCardH3 = styled.h3`
margin: 5px;
display: flex;
text-align: center;
position: absolute;
bottom: 45px;
left: 1px;
background-color: orange;
color: white;
padding: 0px;
border-radius: 5px;

 
`;
const ProductPrice = styled.span`
  font-size: 20px;
  font-weight:bold;
  color: orange;
  margin-left:15px;
  margin-top:15px;
  
`;

const FlashCardContainer = styled.div`
  display: inline;
  flex-wrap: nowrap;
  justify-content: center; /* Change to flex-start to fill the row space */
  height: 200px;
  max-width: 1000px;
  // overflow-x: auto;
  padding: 0px;
  background-color: #f0d469;
  
`;

const FlashCardItem = styled.div`

  flex-direction: column;
  width: 20%; /* Cover full width */
  margin-bottom: 20px; /* Add some space between items */
  height: 300px;
  display: flex; /* Ensure items stack vertically */
  justify-content: space-between; /* Align items at the start and end */
  padding: 10px;
  border-radius: 10px;
  background-color: white; /* Add background color to each item */

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(0.95);
    
  }

@media (max-width: 768px) {
flex: 0; 
flex-direction:column;/* Full width on smaller screens */
margin-bottom: 20px; /* Add some space between items */
height: auto;
}
`;

const FlashCardImg = styled.img`
  flex: 1;
  width: 97%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 10px 10px;
  

`;


// const AddToCartButtonSvg = styled(AddShoppingCartIcon)`
//   width: 20px;
//   height: 20px;
//   fill: black;
// `;


const FlashCard: React.FC<FlashCardProps> = ({ productItems }) => {
  const { addToCart } = useCart();

 
  
  


  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Add this line
  autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow onClick={() => {}} />,
    prevArrow: <SamplePrevArrow onClick={() => {}} />,
  };
  
  return (
    <FlashCardContainer>
      <Slider {...settings}>
        {productItems.map((product) => (
          <FlashCardItem key={product.id}>
            <FlashCardImg src={product.cover} alt={product.name} />
            <FlashCardH3>{product.name}</FlashCardH3>
            <WishlistBtn
              initialLiked={false}
              onToggleLike={() => {
                // Handle like toggle logic here
              }}
              amount={product.price}
            />
            <AddToCartButton onClick={() => addToCart(product)}>
              <AddToCartButtonText>ADD TO CART</AddToCartButtonText>
            </AddToCartButton>
            <ProductPrice>{`$${product.price}`}</ProductPrice>
            
          </FlashCardItem>
        ))}
      </Slider>

      
    </FlashCardContainer>
  );
};

export default FlashCard;
import React from "react";
import Slider, { Settings } from "react-slick";
import { ProductItem } from "./productItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styled from "styled-components";
import WishlistBtn from "../homeScreen/WishlistBtn";

interface FishFlashcard {
    name: string;
    cover: string;
  }
  
  interface FishProps {
    productItems: ProductItem[];
    fishData: FishFlashcard[]; // Define the FishFlashcard type
  }

 

const AddToCartButtonText = styled.span`
  display: inline-block;
  margin: 10px;
  color: white;
  font-size: 13px;
  font-weight:bold;
  
 
`;
const AddToCartButton = styled.div`
  display: block;
  position: absolute;
  bottom: 13px;
  display: right;
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
`;


const NextArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background-color: #f0d469; /* Yellow-green background color */
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
  background-color: #f0d469; /* Yellow-green background color */
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

interface FishProps {
  productItems: ProductItem[];
  fishData: FishFlashcard[];
}

const FishContainer = styled.div`
display: inline;
flex-wrap: nowrap;
justify-content: center; /* Change to flex-start to fill the row space */
height: 100px;
max-width: 1000px;
overflow-x: auto;
padding: 0px;
background-color: #f0d469;
`;
const FishH3 = styled.h3`
margin: 5px;
display:block;
text-align: left;
position: absolute;
bottom: 45px;
background-color: black;
left: 5px;
color: white;
padding: 0px;
border-radius: 5px;
`;



const ProductPrice = styled.span`
  font-size: 20px;
  font-weight:bold;
  color: black;
  margin-left:15px;
  
`;

const FishItem = styled.div`
flex: 0;
  flex-direction: column;
  width: 20%; /* Cover full width */
  margin-bottom: 20px; /* Add some space between items */
  height: auto;
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

const FishImg = styled.img`
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


const Fish: React.FC<FishProps> = ({ productItems }) => {
 

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
    <FishContainer>
      <Slider {...settings}>
        {productItems.map((product) => {
          return (
            <FishItem key={product.id}>  
              <FishImg src={product.cover} alt={product.name} />
              <FishH3>{product.name}</FishH3>
              
              <WishlistBtn
              initialLiked={false}
              onToggleLike={() => {
                // Handle like toggle logic here
              }}
              amount={product.price}
            />
            <AddToCartButton>
              <AddToCartButtonText>ADD TO CART</AddToCartButtonText>
            </AddToCartButton>
            <ProductPrice>{`$${product.price}`}</ProductPrice>
            </FishItem>
          );
        })}
      </Slider>
    </FishContainer>
  );
};

export default Fish;

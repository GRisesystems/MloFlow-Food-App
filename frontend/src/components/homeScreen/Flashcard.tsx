import React, {useState} from "react";
import Slider, { Settings } from "react-slick";
import { ProductItem } from "./productItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WishlistBtn from "../homeScreen/WishlistBtn";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styled from "styled-components";

interface WishlistButtonProps {
  initialLiked: boolean;
  onToggleLike: () => void;
  amount: number; // Add the amount prop
}

const WishlistButtonContainer = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const WishlistIcon = styled(FavoriteIcon)<{ liked: boolean }>`
  width: 20px;
  height: 10px;
  fill: ${props => (props.liked ? "red" : "white")};
  margin-right: 5px;
`;


const WishlistAmount = styled.span`
  font-size: 13px;
  color: black;
 
`;
const WishlistButton: React.FC<WishlistButtonProps> = ({
  initialLiked,
  onToggleLike,
  amount,
}) => {
  const [liked, setLiked] = useState(initialLiked);

  const handleToggleLike = () => {
    setLiked(!liked);
    onToggleLike();
  };

  return (
    <WishlistButtonContainer onClick={handleToggleLike}>
      <WishlistIcon liked={liked} />
      <WishlistAmount>{amount}</WishlistAmount>
    </WishlistButtonContainer>
  );
};

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

interface FlashCardProps {
  productItems: ProductItem[];
}



const FlashCardContainer = styled.div`
  display: inline;
  flex-wrap: nowrap;
  justify-content: center; /* Change to flex-start to fill the row space */
  height: 100px;
  max-width: 1000px;
  overflow-x: auto;
  padding: 0px;
  background-color: #f0d469;
  
`;

const FlashCardItem = styled.div`
  flex: 0 0 calc(25% - 10px); /* Set the width to 25% minus the gap */
  height: 330px;
  margin: 0; 
  overflow: visible;
  border-radius: 0px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(0.95);
    
  }
  
}

}
@media (max-width: 768px) {
  flex: 0 0 100%; /* Full width on smaller screens */
  margin-bottom: 20px; /* Add some space between items */
  height: auto;
}
${AddToCartButton} {
  left: 10px;
}
`;

const FlashCardImg = styled.img`
  flex: 1;
  width: 97%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 10px 10px;
  

`;

const FlashCardH3 = styled.h3`
margin: 5px;
text-align: left;
position: absolute;
bottom: 5px;
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






// const AddToCartButtonSvg = styled(AddShoppingCartIcon)`
//   width: 20px;
//   height: 20px;
//   fill: black;
// `;


const FlashCard: React.FC<FlashCardProps> = ({ productItems }) => {
  


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
            <AddToCartButton>
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
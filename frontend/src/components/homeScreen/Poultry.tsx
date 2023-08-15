import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import { ProductItem } from "./productItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styled from "styled-components";

interface poultryFlashcard {
    name: string;
    cover: string;
  }
  
  interface PoultryProps {
    productItems: ProductItem[];
    poultryData: poultryFlashcard[];
  }

const LikeButton = styled.div`
  display: none;
  position: absolute;
  bottom: 5px;
  left: 5px;
  background-color: rgba(169, 144, 3, 0.8);
  padding: 5px;
  border-radius: 50%;
`;

const AddToCartButton = styled.div`
  display: none;
  position: absolute;
  bottom: 5px;
  left: 5px;
  padding: 5px;
  background-color: rgba(169, 144, 3, 0.8);
  margin-left: 35px;
  border-radius: 50%;
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

interface PoultryProps {
  productItems: ProductItem[];
  poultryData: poultryFlashcard[];

}

const PoultryContainer = styled.div`
  display: inline;
  flex-wrap: nowrap;
  justify-content: center; /* Change to flex-start to fill the row space */
  gap: 20px; /* Set the desired gap between each flashcard */
  max-width: 1000px;
  overflow-x: auto;
  padding: 10px;
`;

const PoultryItem = styled.div`
  flex: 0 0 calc(25% - 10px); /* Set the width to 25% minus the gap */
  height: 300px;
  margin: 0;
  overflow: visible;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: scale(0.95);
    ${LikeButton} {
      display: block;
  }
  ${AddToCartButton} {
    display: block;
  }
}
&.active {
  ${LikeButton} {
    display: block;
    background-color: red;
  }
}
`;

const PoultryImg = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const PoultryH3 = styled.h3`
  margin: 5px;
  text-align: center;
`;



const LikeButtonSvg = styled(FavoriteIcon)`
  width: 20px;
  height: 20px;
  fill: white;
`;



const AddToCartButtonSvg = styled(AddShoppingCartIcon)`
  width: 20px;
  height: 20px;
  fill: black;
`;


const Poultry: React.FC<PoultryProps> = ({ productItems }) => {
  const [likedCards, setLikedCards] = useState<boolean[]>(Array(productItems.length).fill(false));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleLikeClick = (index: number) => {
    const newLikedCards = [...likedCards];
    newLikedCards[index] = !newLikedCards[index];
    setLikedCards(newLikedCards);
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };


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
    <PoultryContainer>
      <Slider {...settings}>
        {productItems.map((product, index) => {
          return (
            <PoultryItem
              key={product.name}
              onClick={() => handleCardClick(index)}
              className={activeIndex === index ? "active" : ""}
            >
              <PoultryImg src={product.cover} alt={product.name} />
              <PoultryH3>{product.name}</PoultryH3>
              <LikeButton className={likedCards[index] ? "fill" : ""} onClick={() => handleLikeClick(index)}>
                <LikeButtonSvg className={likedCards[index] ? "fill" : ""} />
              </LikeButton>
              <AddToCartButton>
                <AddToCartButtonSvg />
              </AddToCartButton>
            </PoultryItem>
          );
        })}
      </Slider>
    </PoultryContainer>
  );
};

export default Poultry;


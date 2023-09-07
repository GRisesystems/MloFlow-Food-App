import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import { ProductItem } from "./productItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { useCart } from '../homeScreen/Cart/CartUtils';
import styled from "styled-components";
import WishlistBtn from "../homeScreen/WishlistBtn";

interface poultryFlashcard {
    name: string;
    cover: string;
  }
  
  interface PoultryProps {
    productItems: ProductItem[];
    poultryData: poultryFlashcard[];
  }
  
  
  
  const AddToCartButtonText = styled.span`
  display: block;
  margin: 0px;
  color: #0C0B0B;
  margin-bottom: 0px;
  font-size: 13px;
  font-weight: bolder;
  @media (max-width: 768px) {
    margin-right: 20px;
  }
       
  `;
  const AddToCartButton = styled.div`
  position: relative; /* or position: relative; based on parent container */
  bottom: 30px;
  left: 180px;
  padding: 14px;
  background-color: #FFB31D;
  width: 120px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  z-index: 1;
  opacity: 1;

  /* Media query for responsive design */
  @media (max-width: 768px) {
    margin-top: 40px;
    position: static; /* Resetting position for smaller screens */
  }
`;


const NextArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background-color: #FFB31D; /* Yellow-green background color */
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
background-color: #ffb31d;
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
  background-color: #d5b542;
}
`;

const NextArrowIcon = styled(ChevronRightIcon)`
  width: 20px;
  height: 20px;
  fill: #0C0B0B;
`;

const PrevArrowIcon = styled(ChevronLeftIcon)`
  width: 20px;
  height: 20px;
  fill: #0C0B0B;
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
const PoultryH3 = styled.h3`
margin: 5px;
  display: flex;
  text-align: center;
  margin-top: 0px;  
  left: 5px;
  width: 90px;
  background-color: #fbb31d;
  color: #0C0B0B;
  border-radius: 5px;
`;



const ProductPrice = styled.span`
font-size: 20px;
padding: 0px;
font-weight: bold;
color: #0C0B0B;
margin-left: 10px;
margin-top: 60px;
  
`;
const PoultryContainer = styled.div`
display: inline;
flex-wrap: nowrap;
justify-content: center; /* Change to flex-start to fill the row space */
height: 100px;
max-width: 1000px;
overflow-x: auto;
padding: 0px;

`;

const PoultryItem = styled.div`
flex-direction: column;
  width: 20%;
  margin-bottom: 10px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  background-color: white;

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



const PoultryImg = styled.img`
flex: 1;
width: 97%;
height: 100%;
object-fit: cover;
border-radius: 10px 10px 10px 10px;

`;
const WeightRangeDropdown = styled.select`
  margin-top: 40px;
  padding: 5px;
  color: #0C0B0B;
  margin-bottom: 0px;
  border: narrow #0C0B0B;
`;
const CounterWrapper = styled.div`
  display: flex;
  margin-left: 190px;
  margin-top: 0px;
  
`;

const CounterButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fbb31d;
  color: #0C0B0B;
  cursor: pointer;
  transition: background-color 0.3s ease;
  

  &:hover {
    background-color: #d5b542;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #0C0B0B;
  }
`;

const CounterNum = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 0 10px;
  color: #0C0B0B;
`;



// const AddToCartButtonSvg = styled(AddShoppingCartIcon)`
//   width: 20px;
//   height: 20px;
//   fill: black;
// `;


const Poultry: React.FC<PoultryProps> = ({ productItems }) => {
  // const { addToCart } = useCart();
  const [counts, setCounts] = useState<{ [productId: string]: number }>({});

 
  const handleIncrement = (productId: string) => {
    setCounts((prevCounts) => {
      const currentCount = prevCounts[productId] || 0;
      const newCounts = { ...prevCounts, [productId]: currentCount + 1 };
      return newCounts;
    });
  };

  const handleDecrement = (productId: string) => {
    setCounts((prevCounts) => {
      const currentCount = prevCounts[productId] || 0;
      const newCounts = { ...prevCounts, [productId]: currentCount > 0 ? currentCount - 1 : 0 };
      return newCounts;
    });
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
        {productItems.map((product) => {
          return (
            <PoultryItem key={product.id}>
              <PoultryImg src={product.cover} alt={product.name} />
              <WeightRangeDropdown>
  <option value="0.5-1">0.5 - 1 kg</option>
  <option value="1-3">1 - 3 kg</option>
  <option value="3-5">3 - 5 kg</option>
</WeightRangeDropdown>
              <div className="counter-wrapper">
              <CounterWrapper>
                <CounterButton onClick={() => handleDecrement(product.id.toString())}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 13H5v-2h14v2z"/>
                  </svg>
                </CounterButton>
                <CounterNum>
                  {/* Display "00" as default */}
                  {counts[product.id] === undefined ? '00' : counts[product.id] < 10 ? `0${counts[product.id]}` : counts[product.id]}
                </CounterNum>
                <CounterButton onClick={() => handleIncrement(product.id.toString())}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z"/>
                  </svg>
                </CounterButton>
              </CounterWrapper>
            </div>
              <PoultryH3>{product.name}</PoultryH3>
              <WishlistBtn
              initialLiked={false}
              onToggleLike={() => {
                // Handle like toggle logic here
              }}
              amount={product.price}
            />
             <ProductPrice>{`$${product.price}`}</ProductPrice>
             <AddToCartButton>
              <AddToCartButtonText>ADD TO CART</AddToCartButtonText>
            </AddToCartButton>
         
            </PoultryItem>
          );
        })}
      </Slider>
    </PoultryContainer>
  );
};

export default Poultry;


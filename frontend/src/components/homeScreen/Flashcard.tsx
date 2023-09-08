import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import WishlistBtn from '../homeScreen/WishlistBtn';
// import { useCart } from '../homeScreen/Cart/CartUtils';
import { ProductItem } from './productItem';

const FlashCardH3 = styled.h3`
  margin: 5px;
  display: flex;
  text-align: center;
  align-items:center;
  justify-content:center;
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

const FlashCardContainer = styled.div`
  display: inline;
  flex-wrap: nowrap;
  position: relative;
  justify-content: center;
  height: 60px;
  max-width: 1000px;
  padding: 0px;
  background-color: white;
`;

const FlashCardItem = styled.div`
  flex-direction: column;
  width: 20%;
  margin-bottom: 20px;
  height: 300px;
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
    flex-direction: column;
    margin-bottom: 0px;
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

const WeightRangeDropdown = styled.select`
  margin-top: 40px;
  padding: 5px;
  color: #0C0B0B;
  margin-bottom: 0px;
  border: narrow #0C0B0B;
  font-weight: bold;
`;
const AddToCartButtonText = styled.span`
font-weight: bolder;
  display: block;
  margin: 0px;
 
  color: #0C0B0B;
  margin-bottom: 0px;
  font-size: 13px;  
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

const AddToCartButton = styled.div`
  position: relative;
  bottom: 40px;
  left: 180px;
  padding: 14px;
  background-color: #FBB31D;
  width: 120px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  z-index: 1;
  opacity: 1;
  
  @media (max-width: 768px) {
    margin-top: 40px;
    position: static;
  }
`;

const NextArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
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
  background-color: #ffb31d;
  color:#0C0B0B;
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

const FlashCard: React.FC<FlashCardProps> = ({ productItems }) => {
  // const { addToCart } = useCart();
  const [counts, setCounts] = useState<{ [productId: string]: number }>({});
  // ... (inside FlashCardItem)
// const [selectedWeightRange, setSelectedWeightRange] = useState<string>('0.5-1');


//  // ... (inside FlashCardItem)
// const handleWeightRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//   setSelectedWeightRange(event.target.value);
// };

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
    autoplay: true,
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
            <div className="counter-wrapper">
      <WeightRangeDropdown>
            <option value="1">1 kg</option>
            <option value="5">5kg</option>
            <option value="10">10 kg</option>
      </WeightRangeDropdown>
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
            <FlashCardH3>{product.name}</FlashCardH3>
            
            <WishlistBtn
              initialLiked={false}
              onToggleLike={() => {
                // Handle like toggle logic here
              }}
              amount={product.price}
            />
             

            <ProductPrice>{`Ksh ${product.price}`}</ProductPrice>
            <AddToCartButton>
              <AddToCartButtonText>ADD TO CART</AddToCartButtonText>
            </AddToCartButton>
           
          </FlashCardItem>
        ))}
      </Slider>
    </FlashCardContainer>
  );
};

export default FlashCard;

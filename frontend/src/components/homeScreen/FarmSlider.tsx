import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { useCart } from '../homeScreen/Cart/CartUtils';
import {Typography, Button, Container} from '@mui/material';
import styled from "styled-components";
import WishlistBtn from "./WishlistBtn";
import axios from "axios";
import './styles.css';

  const WeightRangeDropdown = styled.select`
  padding: 5px;
  color: #0C0B0B;
  margin-bottom: 0px;
  font-weight: bold;
  border: narrow ##0C0B0B;
`;


const NextArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background-color: #fbb31d;
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
  background-color: #fbb31d; /* Yellow-green background color */
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
  fill: #0C0B0B;
`;

const PrevArrowIcon = styled(ChevronLeftIcon)`
  width: 20px;
  height: 20px;
  fill: #0C0B0B;
`;
const CounterWrapper = styled.div`
  display: flex;
  margin-left: 2rem;
`;

const CounterButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffb31d;
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


const SlidingWrapper = styled.div`
display: inline;
flex-wrap: nowrap;
justify-content: center; /* Change to flex-start to fill the row space */
height: 100px;
max-width: 1000px;
overflow-x: auto;
padding: 0px;
`;

const SliderItem = styled.div`
flex-direction: column;
  width: 20%;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;

  transition: transform 0.3s ease;
  &:hover {
    transform: scale(0.95);
    box-shadow: 0px 0px 5px 3px #FBB31D;
  }

  @media (max-width: 768px) {
    flex: 0;
    flex-direction: column;
    margin-bottom: 20px;
    height: auto;
  }

`;

const SliderImage = styled.img`
flex: 1;
width: 97%;
height: 100%;
object-fit: cover;
margin-bottom:1.5rem;
border-radius: 10px 10px 10px 10px;
`;




// const AddToCartButtonSvg = styled(AddShoppingCartIcon)`
//   width: 20px;
//   height: 20px;
//   fill: black;
// `;


const FarmSlider = () => {
  // const { addToCart } = useCart();
  const [counts, setCounts] = useState<{ [productId: string]: number }>({});
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
    autoplay: true, // Add this line
  autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow onClick={() => {}} />,
    prevArrow: <SamplePrevArrow onClick={() => {}} />,
  };
  const [products, setProducts] = useState([])

  const getProducts = async () => {
  const response = await axios.get('http://localhost:8000/products/')
    setProducts(response.data)
    console.log(response.data)
  }

  useEffect(() =>{
    getProducts();
  }, [])
  
  return (
    <SlidingWrapper>
      <Slider {...settings}>
        {products.map((product) => {
            if (product.category === "Farm Produce") {
          return (
            <SliderItem key={product.id}>  
              <SliderImage src={product.imageOne} alt={product.name} />
              <Container className="group-one">
              <Typography component="h3">{product.name}</Typography>
              <Typography component="p">{`KES ${product.price}`}</Typography>
              </Container>
              <Container className="group-two">
          <WeightRangeDropdown>
            <option value="1">1 kg</option>
            <option value="5">5kg</option>
            <option value="10">10 kg</option>
          </WeightRangeDropdown>
              <Container className="counter-wrapper">
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
            </Container>
            </Container>
              <Container className="group-three">
              <WishlistBtn
              initialLiked={false}
              onToggleLike={() => {
                // Handle like toggle logic here
              }}
              amount={product.price}
            />
              <Button variant="contained" className="add">ADD TO CART</Button>
              </Container>
            </SliderItem>
          )}
        })}
      </Slider>
    </SlidingWrapper>
  );
};

export default FarmSlider;

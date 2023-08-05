//import React, { useState } from "react";
import Slider from "react-slick";
import { ProductItem } from "./productItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SampleNextArrowProps {
  onClick: () => void;
}

const SampleNextArrow: React.FC<SampleNextArrowProps> = ({ onClick }) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <ChevronRightIcon />
      </button>
    </div>
  );
};

interface SamplePrevArrowProps {
  onClick: () => void;
}

const SamplePrevArrow: React.FC<SamplePrevArrowProps> = ({ onClick }) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <ChevronLeftIcon />
      </button>
    </div>
  );
};

interface FlashCardProps {
  productItems: ProductItem[];
  //addToCart: (product: ProductItem) => void;
}

const FlashCard: React.FC<FlashCardProps> = ({ productItems }) => {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  // setCount(count + 1);
  // }
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={() => {}} />,
    prevArrow: <SamplePrevArrow onClick={() => {}} />,
  };

  return (
    <div className="flash-card-container">
      <Slider {...settings}>
        {productItems.map((product) => {
          return (
            <div className="flash-card" key={product.name}>
              <img src={product.cover} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="like-button">
                <FavoriteIcon />
              </div>
              {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
            </div>
          );
        })}
      </Slider>
      {/* <button onClick={increment}>Increment Count</button>  */}
    </div>
  );
};

export default FlashCard;

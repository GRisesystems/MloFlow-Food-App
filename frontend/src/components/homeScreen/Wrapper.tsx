import styled from "styled-components";
import { LocalShipping, CreditCard, Security, Headset } from "@mui/icons-material";



const WrapperContainer = styled.section`
  text-align: center;
  display: inline-block;
  background-color: lightbrown;
`;

const WrapperGrid = styled.div`
  display: flex;
  gap: 20px;
`;

const WrapperImg = styled.div`
  margin: auto;
  width: 70px;
  height: 70px;
  line-height: 70px;
  margin-bottom: 20px;
`;

const WrapperProduct = styled.div`
  padding: 50px;
`;

const WrapperH3 = styled.h3`
  font-weight: 500;
`;

const WrapperP = styled.p`
  font-size: 15px;
  margin-top: 20px;
  color: grey;
  font-weight: 400;
`;

const Wrapper = () => {
  const data = [
    {
      cover: <LocalShipping />,
      title: "Countrywide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <CreditCard />,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <Security />,
      title: "Shop With Confidence",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <Headset />,
      title: "24/7 Support",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];

  return (
    <WrapperContainer className="background">
      <WrapperGrid>
        {data.map((val, index) => {
          return (
            <WrapperProduct key={index}>
              <WrapperImg className="icon-circle">{val.cover}</WrapperImg>
              <WrapperH3>{val.title}</WrapperH3>
              <WrapperP>{val.decs}</WrapperP>
            </WrapperProduct>
          );
        })}
      </WrapperGrid>
    </WrapperContainer>
  );
};

export default Wrapper;

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { mobile } from './../../responsive';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ${mobile({height: "65vh"})};
`;
const Arrow = styled.div`
  background-color: rgb(230, 209, 209);
  border-radius: 50%;
  width: 50px;
  padding: 7px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  position: absolute;
  opacity: 0.5;
  z-index:2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

`;
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${mobile({display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',width: "100vw"})};
  
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({marginBottom:"90px", marginLeft:"25px"})};
   
`;
const Image = styled.img`
  width: 100%;
  ${mobile({width:"180px", marginTop:"40px",marginLeft:"30px"})};
`;
const Title = styled.h1`
  font-size: 50px;
  ${mobile({fontSize: "15px"})};
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 50px 0;
  letter-spacing: 3px;
  font-weight: 500;
  ${mobile({fontSize: "15px"})};
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 20px;
  border: 1px solid white;
  ${mobile({display: "none"})};
`;
const Slider = () => {
    console.log(sliderItems)
    const [slideIndex,setSlideIndex]=React.useState(0);
    const handleSlide = (direction) => {
        if (direction === "left") {
          setSlideIndex(slideIndex >= 0 ? slideIndex - 1 : 2);
        } else {
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
      };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSlide("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {
          sliderItems.map((item) => (
        <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>
               {item.desc}
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleSlide("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;

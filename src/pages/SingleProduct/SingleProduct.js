import React from "react";
import styled from "styled-components";
import Navbar from "./../../component/Navbar/Navbar";
import Announcement from "./../../component/Announcement/Announcement";
import NewsLetter from "./../../component/NewsLetter/NewsLetter";
import Footer from "./../../component/Footer/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from './../../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({flexDirection:"column", padding:"10px"})};
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex:1;
  margin: 0 50px;
  
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  border-radius: 5px;
  ${mobile({height:"30vh"})}
`;
const Title = styled.h1`
  font-weight: 200;
  ${mobile({fontSize:"20px",marginTop:"10px"})};
`;
const Desc = styled.p`
  margin: 30px 0px;
  font-size: 16px;
  ${mobile({fontSize:"16px"})}
`;
const Price = styled.span`
  font-size: 23px;
  ${mobile({fontSize:"18px"})}
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.h3`
  font-size: 20px;
  font-weight: 300;
  padding-right: 5px;
`;
const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 3px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
const FilterSize = styled.select`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
`;
const FilterSizeOption = styled.option`
  font-size: 16px;
  font-weight: 300;
`;
const AddContainer = styled.div`
width:50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})};
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
`;
const Amount = styled.span`
  margin: 0px 5px;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;
const Button = styled.button`
  padding:10px;
  background-color: rgb(214, 208, 208);
  color: black;
  border: 1px solid #f8f4f4;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: teal;
    border: 1px solid teal;
    border-radius: 5px;
    color: white;
  };
  
`;
const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/56kxNgJ/photo-1483985988355-763728e1935b.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$120</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="orange" />
            </Filter>

            <Filter>
              <FilterSize>
                <FilterSizeOption disabled selected>
                  Size
                </FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
                <FilterSizeOption>XXXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;

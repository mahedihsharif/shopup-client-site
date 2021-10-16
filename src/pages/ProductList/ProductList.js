import React from "react";
import styled from "styled-components";
import Announcement from "../../component/Announcement/Announcement";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import NewsLetter from "../../component/NewsLetter/NewsLetter";
import Products from "../../component/Products/Products";
import { mobile } from './../../responsive';

const Container = styled.div`
`;
const Title = styled.h2`
 margin:20px;
 ${mobile({fontSize:"15px"})}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin:20px;
  ${mobile({flexDirection:"column"})}
`;
const Filter = styled.div`
display: flex;
${mobile({marginTop:"15px"})}
`;
const FilterText = styled.div`
font-size:20px;
font-weight:400;
${mobile({fontSize:"15px"})}
`;
const Select = styled.select`
margin-left:10px;
padding:5px;
border:1px solid gray;
border-radius:5px;
${mobile({padding:"3px"})}
`;
const Option = styled.option`
font-size:16px;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
          <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Orange</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Gray</Option>
          </Select>

          <Select>
          <Option disabled selected>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
            <Option>XXXL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
        <Products/>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;

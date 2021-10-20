import React from "react";
import { useLocation } from "react-router";
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
  const location=useLocation();
  const cat= location.pathname.split("/")[2];
  const [filters,setFilters] =React.useState({});
  const [sort,setSort] = React.useState("newest")
  const handleFilters=(e)=>{
    const newFilter={...filters};
    newFilter[e.target.name] = e.target.value;
    setFilters(newFilter);
  }
 
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
          <Option disabled  >Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Orange</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Gray</Option>
          </Select>

          <Select name="size" onChange={handleFilters}>
          <Option disabled  >Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>X</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
            <Option>XXXL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>{setSort(e.target.value)}}>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;

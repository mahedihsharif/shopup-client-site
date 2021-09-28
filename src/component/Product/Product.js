import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
top: 0;
left: 0;
 position: absolute;
 display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.2);
z-index:3;
height: 100%;
width: 100%;
  opacity: 0;
 transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
    &:hover ${Info} {
         opacity:1;
        
}
`;
const Circle = styled.div`
width:250px;
height:250px;
border-radius:50%;
background-color: white;
position: absolute;

`;
const Image = styled.img`
height: 75%;
z-index:2;
`;

const Icon = styled.div`
width:50px;
height:50px;
background-color:white;
border-radius:50%;
margin:5px;
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

const Product = ({ pd }) => {
  return (
    <Container>
      <Circle />
      <Image src={pd.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>
        <Icon>
          <SearchOutlined/> 
        </Icon>
        <Icon>
           <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

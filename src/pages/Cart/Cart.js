import React from "react";
import Navbar from "./../../component/Navbar/Navbar";
import Announcement from "./../../component/Announcement/Announcement";
import Footer from "./../../component/Footer/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from './../../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  padding-top: 15px;
  ${mobile({ fontSize:"20px"})};
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  font-size: 16px;
  ${mobile({fontSize:"13px"})};
`;
const TopTexts = styled.div`
${mobile({display: "none"})};
`;
const TopText = styled.span`
  margin: 10px;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`;
const Bottom = styled.div`
display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column", marginTop:"15px"})};
`;

const Info = styled.div`
flex:3;
`;
const Product = styled.div`
display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})};
`;
const ProductDetail = styled.div`
flex: 2;
  display: flex;
  ${mobile({padding:"10px"})}
`;
const Image = styled.img`
width:300px;
${mobile({width:"180px",height:"180px"})};
`;
const Details = styled.div`
display: flex;
padding: 40px;
justify-content: space-around;
flex-direction: column;
`;
const ProductName = styled.div`
${mobile({fontSize:"15px"})};
`;
const ProductId = styled.div`
${mobile({fontSize:"15px", marginTop:"10px"})};
`;
const ProductColor = styled.div`
width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  ${mobile({marginTop:"10px"})};
`;
const ProductSize = styled.div`
${mobile({fontSize:"15px", marginTop:"10px"})}
`;
const PriceDetail = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
   
`;
const ProductAmountContainer= styled.div`
display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  
`;
const ProductAmount=styled.div`
font-size: 24px;
  margin: 5px;
  ${mobile({fontSize:"20px"})}
`;
const ProductPrice = styled.div`
font-size: 30px;
  font-weight: 200;
  ${mobile({fontSize:"20px", paddingBottom:"10px"})}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle=styled.h1`
font-weight: 200;
margin:5px;
${mobile({fontSize:"20px"})}
`;
const SummaryItem = styled.div`
 margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemPrice = styled.span`
font-size:20px;
`;
const SummaryItemText = styled.span`
font-size:20px;
`;
const Button = styled.button`
width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius:10px;
  
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Your Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://i.ibb.co/zRRw0pw/images.jpg"/> 
                        <Details>
                        <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
                </Product>
                <Hr/> 
                <Product>
                    <ProductDetail>
                        <Image src="https://i.ibb.co/B4KjgJr/bag-2.png"/> 
                        <Details>
                        <ProductName>
                    <b>Product:</b> JESSIE THUNDER BAG
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 954554566657
                  </ProductId>
                  <ProductColor color="blue" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
                </Product>
            </Info>
            <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

import React from "react";
import Navbar from "./../../component/Navbar/Navbar";
import Announcement from "./../../component/Announcement/Announcement";
import Footer from "./../../component/Footer/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "./../../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router';
import axios from "axios";
import { userRequest } from "../../requestMethod";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  padding-top: 15px;
  ${mobile({ fontSize: "20px" })};
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
  ${mobile({ fontSize: "13px" })};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })};
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
  ${mobile({ flexDirection: "column", marginTop: "15px" })};
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ padding: "10px" })}
`;
const Image = styled.img`
  width: 300px;
  ${mobile({ width: "180px", height: "180px" })};
`;
const Details = styled.div`
  display: flex;
  padding: 40px;
  justify-content: space-around;
  flex-direction: column;
`;
const ProductName = styled.div`
  ${mobile({ fontSize: "15px" })};
`;
const ProductId = styled.div`
  ${mobile({ fontSize: "15px", marginTop: "10px" })};
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  ${mobile({ marginTop: "10px" })};
`;
const ProductSize = styled.div`
  ${mobile({ fontSize: "15px", marginTop: "10px" })}
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ fontSize: "20px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: "20px", paddingBottom: "10px" })}
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
  height: 40vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
  margin: 5px;
  ${mobile({ fontSize: "20px" })}
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemPrice = styled.span`
  font-size: 20px;
`;
const SummaryItemText = styled.span`
  font-size: 20px;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
`;
const Cart = () => {
  const cartProduct = useSelector((state) => state.cart);
  const product=cartProduct.products;
  const [stripeToken,setStripeToken] =React.useState(null);
  const history=useHistory();
  const KEY="pk_test_51IeCGeC8AvDso05GV3C0XOjeZAk3g9TFOO04AtQzFsVmRBSLuJtVHDHDctf4nDNZgoUxQsofjFZeAOnKFEsfOMSy00dbCEIeZh"
  const onToken=(token)=>{
    setStripeToken(token)
  };

  React.useEffect(() => {
    const makeRequest = async() => {
        try {
           const res= await userRequest.post('http://localhost:6500/api/checkout/payment',
          {
            tokenId:stripeToken.id,
            amount:500,
          });
           history.push("/success",{stripeData:res.data, products:cartProduct});
        }
        catch(err) {
            console.log(err);
        }
    };
    stripeToken && makeRequest()
},[stripeToken, cartProduct.total, history])
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton type="filled">Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Your Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
            <Info>
            { product.map((catItem) => (
             <>
              <Product>
                <ProductDetail>
                  <Image src={catItem.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {catItem.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {catItem._id}
                    </ProductId>
                    <ProductColor color={catItem.color} />
                    <ProductSize>
                      <b>Size:</b> {catItem.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{catItem.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ {catItem.price * catItem.quantity}</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              </>
              ))}
              
            </Info>
         

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cartProduct.total}</SummaryItemPrice>
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
              <SummaryItemPrice>$ {cartProduct.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout 
        name="Shopup"
        image="https://i.ibb.co/0BBRQxL/Stylish-Girl-Hide-Face-FB-DP-2021-11.jpg"
        shippingAddress
        billingAddress
        description={`Your Total is $${cartProduct.total}`}
        amount={cartProduct.total * 100}
        token={onToken}
        stripeKey={KEY}
        >
        <Button>CHECKOUT NOW</Button>
        </StripeCheckout> 
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

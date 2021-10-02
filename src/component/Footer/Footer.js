import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding:20px;
`;
const Logo = styled.div`
font-size:25px;
margin-bottom: 15px;
`;
const Desc = styled.p`
font-size:18px;
font-weight:500px;
margin:20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
 
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
margin-right: 10px;
color:white;
background-color:#${(props) => props.color};
display: flex;
justify-content:center;
align-items:center;
cursor:pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h1`
font-size:25px;
margin-bottom: 10px;
font-weight:400;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
font-size: 18px;
`;
const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 10px;
 display: flex;
 align-items: center;
 margin-bottom: 20px;
`;
const Payment = styled.img`
width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopup</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>

            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>

            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>

        </SocialContainer>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
          <Room style={{marginRight:"10px"}}/> 05 Dhanmondi road, Cumilla.
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +880-1956742573
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} />  mahedi5061@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

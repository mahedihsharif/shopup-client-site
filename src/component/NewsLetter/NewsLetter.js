import React from "react";
import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
 

const Container = styled.div`
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
 background-color:#fcf5f5;
 height:50vh;
 ${mobile({width:"100vw"})};
`;
const Title = styled.h1`
font-size: 50px;
margin-bottom: 15px;
${mobile({fontSize: "25px",})};
`;
const Desc = styled.div`
font-size:25px;
font-weight:300;
margin-bottom:25px;
 text-align:center;
 ${mobile({fontSize: "16px",textAlign: "justify",width:"70vw"})};
`;
const InputContainer = styled.div`
width: 50%;
height:50px;
background-color:white;
display:flex;
justify-content:space-between;
${mobile({width:"70vw"})};
 
`;
const Input = styled.input`
font-size:20px;
border:none;
padding:10px;
flex:8;
border-radius:0 5px 5px 0;
`;
const Button = styled.button`
border:none;
flex:1;
background-color:teal;
color:white;
 cursor: pointer;
 border-radius:0 5px 5px 0;
 font-size: 30px;
 ${mobile({paddingLeft:"15px", paddingRight:"15px"})};
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get timely update for your Favourite products</Desc>
      <InputContainer>
        <Input placeholder="Enter a Email"/>
        <Button>
        <Send></Send>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;

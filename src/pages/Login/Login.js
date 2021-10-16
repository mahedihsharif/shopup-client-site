import React from "react";
import styled from "styled-components";
import Navbar from "./../../component/Navbar/Navbar";
import { mobile } from './../../responsive';

const Container = styled.div`
width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://i.ibb.co/19gVc4v/photo-1522199755839-a2bacb67c546.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;
const Wrapper = styled.div`
background-color:white;
width:25%;
margin:0px 30px;
padding:20px;
border-radius: 5px;
${mobile({width:"75%", padding:"30px"})}
`;
const Form = styled.form`
display: flex;
  flex-direction: column;
`;
const Input = styled.input`
flex: 1;
  min-width: 30%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  border: none;
  padding: 15px 20px;
  margin:20px 0px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Link = styled.a`
 margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Title = styled.h1`
font-size: 24px;
  font-weight: 300;
  text-align: center;
  ${mobile({fontSize:"20px"})}
`;
const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
        <Title>Login</Title>
          <Form>
            <Input placeholder="Email Address" />
            <Input placeholder="Password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;

import React from "react";
import styled from "styled-components";
import Navbar from './../../component/Navbar/Navbar';

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
  background-color: white;
  width:30%;
  padding:20px;
  margin: 0px 100px;
  border-radius: 5px;
`;
const Form = styled.form`
  display: flex;
   flex-wrap: wrap; 
`;
const Input = styled.input`
  flex: 1;
  min-width: 30%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
  margin: 20px 0px;

`;
const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Title = styled.h1`
   font-size: 20px;
  font-weight: 300;
  text-align: center;
`;
const Register = () => {
  return (
      <>
        <Navbar/>
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="username" />
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
    </>
  );
};

export default Register;

import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60;
  background-color:#E8E8E8
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;
const SerachContainer = styled.div`
  border: 0.5px solid lightgray;
  padding: 5px;
  display: flex;
  margin-left: 15px;
`;
const Input = styled.input`
  border: none;
  padding:5px;
  border-radius:5px
`;
const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h3`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left:15px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SerachContainer>
            <Input />
            <Search style={{fontSize:"23px",color:"gray", cursor:"pointer"}}/>
          </SerachContainer>
        </Left>
        <Center>
          <Logo>Shopup</Logo>
        </Center>
        <Right>
          <MenuItem>Login</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

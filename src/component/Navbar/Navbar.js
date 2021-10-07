import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from './../../responsive';

const Container = styled.div`
   height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;
const SerachContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({height:"20px", marginBottom:"22px" })};
`;
const Input = styled.input`
  border: none;
  padding:5px;
  border-radius:5px;
  ${mobile({ width: "50px" })}
`;
const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h3`
  font-weight: bold;
  ${mobile({ fontSize: "16px",marginBottom:"15px" })};
   padding:8px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left:15px;
  ${mobile({ fontSize: "14px", marginLeft: "10px", marginBottom: "15px"})}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SerachContainer>
            <Input placeholder="Search"/>
            <Search style={{fontSize:"23px",color:"gray", cursor:"pointer",paddingTop:"5px"}}/>
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

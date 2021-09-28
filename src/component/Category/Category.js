import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
width: 100%;
height: 100vh;
margin:8px;
position: relative;
`;
const Info=styled.div`
top: 0;
left: 0;
position: absolute;
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Image=styled.img`
height:100%;
`;
const Title=styled.h2`
color:white;
margin:20px;
font-weight: 500;
letter-spacing:3px;
`;
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color:#fcf1ed;
font-weight: 500;
border:1px solid #fcf1ed;
border-radius:5px;
cursor: pointer;
color:teal;
`;

const Category = ({cat}) => {
    return (
        <Container>
            <Image src={cat.img}/>
            <Info>
                <Title>{cat.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    );
};

export default Category;
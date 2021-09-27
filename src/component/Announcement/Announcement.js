import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
display:flex;
justify-content: center;
background-color:teal;
font-size:20px;
padding:10px;
height:30px;
color:white;
font-weight:500;
`
const Announcement = () => {
    return (
        <Container>
            Super Deals! on order over $50
        </Container>
    );
};

export default Announcement;
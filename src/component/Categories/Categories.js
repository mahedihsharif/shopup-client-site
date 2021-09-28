import { CardTravelTwoTone } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { categories } from '../../data';
import Category from '../Category/Category';
const Container= styled.div`
display: flex;
justify-content: space-between;
padding:10px;
`
const Categories = () => {
    return (
        <Container>
            {
                categories.map(cat=><Category cat={cat} key={cat.id}/>)
            }
        </Container>
    );
};

export default Categories;
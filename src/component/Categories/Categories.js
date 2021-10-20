 
import React from 'react';
import styled from 'styled-components';
import { categories } from '../../data';
import Category from '../Category/Category';
import { mobile } from './../../responsive';
const Container= styled.div`
display: flex;
justify-content: space-between;
padding:10px;
${mobile({flexDirection:"column"})};
`
const Categories = () => {
    return (
        <Container>
            {
                categories.map(catItem=><Category catItem={catItem} key={catItem.id}/>)
            }
        </Container>
    );
};

export default Categories;
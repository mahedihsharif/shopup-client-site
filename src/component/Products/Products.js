import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../../data';
import Product from '../Product/Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = () => {
    return (
        <Container>
            {
                popularProducts.map(pd=><Product pd={pd} key={pd.id}/>)
            }
        </Container>
    );
};

export default Products;
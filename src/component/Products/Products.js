import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../../data';
import Product from '../Product/Product';
import axios from 'axios'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = ({cat,filters,sort }) => {
     const [products,setProducts]=React.useState([]);
     const [filterProduct,setFilterProduct]=React.useState([]);
     
     React.useEffect(() => {
        const getProducts =async ()=>{
            try{
                const res= await axios.get(
                    cat
                    ? `http://localhost:6500/api/products?category=${cat}`
                  : "http://localhost:6500/api/products"
                   
                 )
                 setProducts(res.data);
                }
            catch(err){
                console.log(err)
            }
        }
        getProducts();
     },[cat])

     React.useEffect(() => {
        cat && setFilterProduct(
            products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        )
     },[products, cat, filters])

     React.useEffect(() => {
         if(sort === "newest"){
            setFilterProduct((prev)=>
                [...prev].sort((a,b)=>a.createdAt-b.createdAt)
            )
         }

        else if(sort === "asc"){
            setFilterProduct((prev)=>
                [...prev].sort((a,b)=>a.price-b.price)
            )
         }

         else{
            setFilterProduct((prev)=>
                [...prev].sort((a,b)=>b.price-a.price)
            )
         }
     },[sort])
      
    return (
        <Container>
        {
            cat ? filterProduct.map(pd=><Product pd={pd} key={pd._id}/>):
            products.map(pd=><Product pd={pd} key={pd.id}/>)
        }
            
        </Container>
    );
};

export default Products;
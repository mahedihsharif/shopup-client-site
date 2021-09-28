import React from 'react';
import Announcement from '../../component/Announcement/Announcement';
import Categories from '../../component/Categories/Categories';
import Navbar from '../../component/Navbar/Navbar';
import Products from '../../component/Products/Products';
import Slider from './../../component/Slider/Slider';

const Home = () => {
    return (
        <>
        <Announcement/>
          <Navbar/> 
          <Slider/> 
          <Categories/>
          <Products/>
        </>
    );
};

export default Home;
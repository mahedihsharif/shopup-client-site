import React from 'react';
import Announcement from '../../component/Announcement/Announcement';
import Categories from '../../component/Categories/Categories';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import NewsLetter from '../../component/NewsLetter/NewsLetter';
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
          <NewsLetter/>
          <Footer/>
        </>
    );
};

export default Home;
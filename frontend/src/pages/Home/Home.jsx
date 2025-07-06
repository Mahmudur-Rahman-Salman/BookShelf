import React from 'react';
import Banner from './Banner';
import TopSales from './TopSales';
import Recommended from './Recommended';
import News from './News';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSales></TopSales>
            <Recommended></Recommended>
            <News></News>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import TopSales from './TopSales';
import Recommended from './Recommended';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSales></TopSales>
            <Recommended></Recommended>
        </div>
    );
};

export default Home;
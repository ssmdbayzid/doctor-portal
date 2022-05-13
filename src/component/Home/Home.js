import React from 'react';
import Additional from './Additional';
import Additional2 from './Additional2';
import Banner from './Banner';
import './Home.css'
import Info from './Info';
import Service from './Service';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Additional></Additional>
            <Additional2></Additional2>
        </div>
    );
};

export default Home;
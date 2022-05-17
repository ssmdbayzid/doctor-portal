import React from 'react';
import Appointment from './Appointment';

import Banner from './Banner';
import Exceptional from './Exceptional';
import Footer from '../Share/Footer';
import './Home.css'
import Info from './Info';
import Review from './Review';
import Service from './Service';

const Home = () => {
    return (
        <div className='home p-12'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;
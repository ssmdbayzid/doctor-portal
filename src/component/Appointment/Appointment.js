import React, { useState } from 'react';

// import React from 'react';
import Footer from '../Share/Footer';
import App_Banner from './App_Banner';
import ServiceContainer from './ServiceContainer';
import Slot from './Slot';



const Appointment = () => {
    const [date, setDate] = useState(new Date());
    // const date  = useState(new Date());
    
    return (
        <div className='px-12'>
            { date && <App_Banner date={date} setDate={setDate}></App_Banner>}
            { date && <ServiceContainer date={date}></ServiceContainer>}
            {date && <Slot date={date}></Slot>}
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
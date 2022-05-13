import React from 'react';
import clock from '../../assets/icons/clock.svg'
const Info = () => {
    return (
        <div className='grid mx-auto p-5 gap-4 md:grid-cols-1 lg:grid-cols-3'>
            <div className='lg:flex md:items-center justify-center md:mx-auto rounded-2xl lg:align-center text-white mx-auto px-8 py-6 bg-gradient-to-r from-secondary to-primary'>
                <div>
                    <img src={clock} alt="clock" />
                </div>
                <div className='ml-5'>
                    <h1>Opening Hours</h1>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className='lg:flex md:items-center justify-center md:mx-auto rounded-2xl lg:align-center text-white mx-auto px-8 py-6 bg-accent'>
                <div>
                    <img src={clock} alt="clock" />
                </div>
                <div className='ml-5 '>
                    <h1>Opening Hours</h1>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className='lg:flex md:items-center justify-center md:mx-auto rounded-2xl lg:align-center text-white mx-auto px-8 py-6 bg-gradient-to-r from-secondary to-primary'>
                <div>
                    <img  src={clock} alt="clock" />
                </div>
                <div className='ml-5'>
                    <h1>Opening Hours</h1>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
        </div>
    );
};

export default Info;
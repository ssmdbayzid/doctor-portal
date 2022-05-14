import React from 'react';
import clock from '../../assets/icons/clock.svg'
import phone from '../../assets/icons/phone.svg'
import marker from '../../assets/icons/marker.svg'
import SingleInfo from './SingleInfo';
const Info = () => {

    // const infos = [
    //     {
    //         _id: 1,
    //         tittle: 'Opening Hours',
    //         details: 'Lorem Ipsum is simply dummy text of the pri',
    //         img: clock
    //     },
    //     {
    //         _id: 2,
    //         tittle: 'Visit our location',
    //         details: 'Lorem Ipsum is simply dummy text of the pri',
    //         img: phone
    //     },
    //     {
    //         _id: 3,
    //         tittle: 'Contact us now',
    //         details: 'Lorem Ipsum is simply dummy text of the pri',
    //         img: marker
    //     }

    // ]
    return (
        <div className='grid mx-auto p-5 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <SingleInfo bg='bg-gradient-to-r from-secondary to-primary' tittle={'Opening Hours'} details={'Lorem Ipsum is simply dummy text of the pri'} img={clock}></SingleInfo>
            <SingleInfo bg='bg-accent' tittle={'Visit our location'} details={'Lorem Ipsum is simply dummy text of the pri'} img={marker}></SingleInfo>
            <SingleInfo bg='bg-gradient-to-r from-secondary to-primary' tittle={'Opening Hours'} details={'Lorem Ipsum is simply dummy text of the pri'} img={phone}></SingleInfo>
        </div>
    );
};

export default Info;
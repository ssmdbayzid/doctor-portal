import { format } from 'date-fns';
import React from 'react';
import Service from './Service';

// const ServiceContainer = ({date}) => {


const ServiceContainer = ({date}) => {
    const services = [
        {
            id: 1,
            name: 'Teeth Orthodontics'
        },
        {
            id: 2,
            name: 'Teeth Cleaning'
        },
        {
            id: 3,
            name: 'Cosmetic Dentistry'
        },
        {
            id: 4,
            name: 'Cavity Protection'
        },
        {
            id: 5,
            name: 'Pediatric Dental'
        },
        {
            id: 6,
            name: 'Oral Surgery'
        }
    ]

    return (
        <div>
            <div className='my-10'>
                <p className='text-secondary font-bold text-2xl text-center'>Available Service On {format(date, 'PP')}</p>


            </div>

            <div className='grid gap-8 grid-cols-1 my-12 lg:grid-cols-3'>
                {
                      services.map(service => <Service
                        key={service.id}
                        name={service.name}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default ServiceContainer;
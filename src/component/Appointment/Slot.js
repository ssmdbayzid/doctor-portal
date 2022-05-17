import React, { useEffect, useState } from 'react';
import SlotService from './SlotService';

const Slot = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='mt-20 mb-28'>
            <p className='text-secondary font-bold my-12 text-2xl text-center'>Available slots for Teeth Orthodontics.</p>

            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                {
                    services.map(service => <SlotService
                        key={service.id}
                        service={service}
                    ></SlotService>)
                }
            </div>

        </div>

    );
};

export default Slot; 
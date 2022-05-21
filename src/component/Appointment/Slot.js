import React, { useEffect, useState } from 'react';
import SlotService from './SlotService';
import TreatmentModal from './TreatmentModal';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';

const Slot = ({ date }) => {

    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP')

    const {data: services, isLoading}   = useQuery('available',  ()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res => res.json())
    
    )


    if(isLoading){
        <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     // fetch(`http://localhost:5000/service`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])

    return (
        <div className='mt-20 mb-28'>
            <p className='text-secondary font-bold my-12 text-2xl text-center'>Available slots for Teeth Orthodontics. {format(date, 'PP')} </p>

            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                {
                    services && services.map(service => <SlotService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></SlotService>)
                }

                {
                    treatment && <TreatmentModal
                        key={treatment._id}
                        treatment={treatment}
                        date={date}
                        setTreatment={setTreatment}
                    ></TreatmentModal>
                }
            </div>

        </div>

    );
};

export default Slot; 
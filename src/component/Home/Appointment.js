import React from 'react';
import appointment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor-small.png'
import Button from '../Button';

const Appointment = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className='flex mt-16  items-center justify-center'
        >
                <div className='flex-1 hidden lg:block w-1/2'>
                    <img className='mt-[-100px] rounded' src={doctor}/>
                </div>
                <div className='flex-1 p-16 w-1/2 text-white'>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>Get Starts</Button>
                </div>

        </section>
    );
};

export default Appointment;
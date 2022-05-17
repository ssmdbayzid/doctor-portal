
import React from 'react';
import Button from '../Button';

const SlotService = ({service}) => {
    const {serviceName, slot} = service;
    return (
        <div class="card text-center lg-max-w-lg shadow-xl">
            <div class="card-body">
                <h2 class=" mx-auto card-title">{serviceName}</h2>
                <p>
                    {slot.length > 0 ? <span>{slot[0]}</span> : <span className='text-red-600'>No Slot Available</span>}
                </p>
                <p>{slot.length} {slot.length > 1? 'spaces' : 'space'} available</p>
                <div class="card-actions mx-auto mt-8 justify-end">
                    <Button disabled={slot.length === 0} >Book Appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default SlotService;
// {slot.length == 0 && isDisabled}
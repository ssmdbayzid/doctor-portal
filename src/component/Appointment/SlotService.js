import React from 'react';
import Button from '../Button';

const SlotService = ({service}) => {
    const {serviceName, time} = service;
    return (
        <div class="card text-center w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class=" mx-auto card-title">{serviceName}</h2>
                <p>{time}</p>
                <div class="card-actions mx-auto mt-8 justify-end">
                    <Button>Book Appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default SlotService;
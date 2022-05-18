
import React from 'react';
// import Button from '../Button';

const SlotService = ({service, setTreatment}) => {


    const {serviceName, slot} = service;
    return (
        <div className="card text-center lg-max-w-lg shadow-xl">
            <div className="card-body">
                <h2 className=" mx-auto text-secondary card-title">{serviceName}</h2>
                <p>
                    {slot.length > 0 ? <span>{slot[0]}</span> : <span className='text-red-600'>No Slot Available</span>}
                </p>
                <p>{slot.length} {slot.length > 1? 'spaces' : 'space'} available</p>
                <div className="card-actions mx-auto mt-8 justify-end">
                    <label
                    htmlFor="treatment-modal" className="btn btn-secondary hover:text-white modal-button"
                    disabled={slot.length === 0}
                    onClick={()=>setTreatment(service)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default SlotService;
// {slot.length == 0 && isDisabled}
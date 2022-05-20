
import React from 'react';
// import Button from '../Button';

const SlotService = ({service, setTreatment}) => {

    const {name, slots} = service;
    return (
        <div className="card text-center lg-max-w-lg shadow-xl">
            <div className="card-body">
                <h2 className=" mx-auto text-secondary card-title">{service && name}</h2>
                <p>
                    {slots?.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600'>No Slots Available</span>}
                </p>
                <p>{slots?.length} {slots?.length > 1? 'spaces' : 'space'} available</p>
                <div className="card-actions mx-auto mt-8 justify-end">
                    <label
                    htmlFor="treatment-modal" className="btn btn-secondary hover:text-white modal-button"
                    disabled={slots?.length < 1}
                    onClick={()=>setTreatment(service)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default SlotService;
// {slot.length == 0 && isDisabled}
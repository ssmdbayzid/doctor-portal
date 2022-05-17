
import React from 'react';
import Button from '../Button';

const SlotService = ({service}) => {

    const [text, setText] = ('')

    
    if(text){
        console.log(text)
    }


    const {serviceName, slot} = service;
    return (
        <div className="card text-center lg-max-w-lg shadow-xl">
            <div className="card-body">
                <h2 className=" mx-auto card-title">{serviceName}</h2>
                <p>
                    {slot.length > 0 ? <span>{slot[0]}</span> : <span className='text-red-600'>No Slot Available</span>}
                </p>
                <p>{slot.length} {slot.length > 1? 'spaces' : 'space'} available</p>
                <div className="card-actions mx-auto mt-8 justify-end">
                    {/* <Button
                    disabled={slot.length === 0}
                    onClick={()=>setTreatment(service)}
                    >Book Appointment</Button> */}

                    <Button
                    disabled={slot.length === 0}
                    onClick={()=>setText('this is text for service')}
                    >Book Appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default SlotService;
// {slot.length == 0 && isDisabled}
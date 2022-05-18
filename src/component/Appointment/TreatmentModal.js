import React from 'react';
import { format } from 'date-fns';
import cover from '../../assets/images/dental-cover.jpg'

const TreatmentModal = ({ treatment, date, setTreatment }) => {
    const { serviceName, slot } = treatment

    const handleModal = event =>{
        event.preventDefault()
        const newSlot = event.target.newSlot.value;
        const name = event.target.name.value;
        const number = event.target.number.value;
        const email = event.target.email.value;
        
        console.log( name, number, email, newSlot)
        setTreatment(null)
    }

  
    return (
        <div>
            <input type="checkbox" id="treatment-modal" className="modal-toggle" />
            <div className="modal modal-bottom text-center sm:modal-middle">
                <div style={{background : `url(${cover})`}} className="modal-box">
                    <label htmlFor="treatment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary absolute left-2 top-2 text-2xl">Booking For: {serviceName}</h3>
                    <form onSubmit={handleModal} className='grid grid-cols-1 gap-2 mt-12 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input text-lg font-bold  input-bordered w-full max-w-xs" />

                        <select  name='newSlot' className="select select-bordered  w-full max-w-xs">
                            {
                                slot.map(newSlot=><option
                                name='newSlot'     
                                value={newSlot}>{newSlot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input text-sm input-bordered w-full max-w-xs"required />
                        <input type="number" name='number' placeholder="Phone Number" className="input text-sm input-bordered w-full max-w-xs" required />
                        <input type="email" name='email' placeholder="email" className="input text-sm input-bordered w-full max-w-xs" required />
                        <input className='block mx-auto btn btn-secondary rounded-lg text-white text-lg py-3 w-[320px]' type="submit" value="Submit" />
                    </form>
                    <div className='my-12'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentModal;
import React from 'react';
import { format } from 'date-fns';
import cover from '../../assets/images/dental-cover.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TreatmentModal = ({ treatment, date, refetch, setTreatment }) => {

    const [user, loading] = useAuthState(auth)

    if(loading){
        <Loading></Loading>
    }
    const { name, _id, slots } = treatment

    const formattedDate = format(date, 'PP')

    const handleModal = event =>{
        event.preventDefault()
        const slot = event.target.newSlot.value;

        
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot: slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.number.value,

        }

        fetch('http://localhost:5000/booking', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },

            body : JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
            toast.success('Thanks For Your Booking')

                toast(`Appointment is set on ${formattedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot} `)
            }
        })
        refetch()
        setTreatment(null)
    }

  
    return (
        <div>
            <input type="checkbox" id="treatment-modal" className="modal-toggle" />
            <div className="modal modal-bottom text-center sm:modal-middle">
                <div style={{background : `url(${cover})`}} className="modal-box">
                    <label htmlFor="treatment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary absolute left-2 top-2 text-2xl">Booking For: {name}</h3>
                    <form onSubmit={handleModal} className='grid grid-cols-1 gap-2 mt-12 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input text-lg font-bold  input-bordered w-full max-w-xs" />

                        <select  name='newSlot' className="select select-bordered  w-full max-w-xs">
                            {
                            slots &&    slots.map((slot, index)=><option
                                key={index}
                                name='newSlot'     
                                value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user? user.displayName : ''} className="input text-sm input-bordered w-full max-w-xs"required />
                        <input type="email" name='email' disabled value={user? user.email : ''} className="input text-sm input-bordered w-full max-w-xs" required />

                        <input type="number" name='number' placeholder="Phone Number" className="input text-sm input-bordered w-full max-w-xs" required />
                        <input className='block mx-auto btn btn-secondary rounded-lg text-white text-lg py-3 w-[320px]' type="submit" value="Submit" />
                    </form>
                           
                </div>
            </div>
        </div>
    );
};

export default TreatmentModal;
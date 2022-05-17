import React from 'react';

const TreatmentModal = ({ treatment }) => {
    const { serviceName, slot } = treatment
    return (
        <div>
            <input type="checkbox" id="treatment-modal" className="modal-toggle" />
            <div className="modal modal-bottom text-center sm:modal-middle">
                <div className="modal-box">
                    <label for="treatment-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold absolute left-2 top-2 text-lg">Booking For: {serviceName}</h3>
                    <form>
                        <input type="text" placeholder="Type here" class="input text-sm m-3 input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input text-sm m-3 input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input text-sm m-3 input-bordered w-full max-w-xs" />
                        <input className='block mx-auto bg-accent rounded-lg text-white text-xl py-3 w-[320px]' type="submit" value="Submit"/>
                    </form>
                    <div className='my-12'>

                    </div>


                    {/* <p className="py-4">Schedule Period: {slot[0]}</p>
                    <div className="modal-action">
                        <label for="treatment-modal" className="btn">Book</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TreatmentModal;
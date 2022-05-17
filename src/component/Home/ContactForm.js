import React from 'react';
import bg from '../../assets/images/appointment.png'
import Button from '../Button';

const ContactForm = () => {
    return (
        <div
                style={{
                    background: `url(${bg})`,
                    // backgroundColor: 'green'
                    backgroundSize: '100%',
                }}
                className="mt-16 text-center py-16"
            >
                <h1 className='text-center text-lg text-secondary font-bold'>Contact Us</h1>
                <h1 className='text-center text-white text-2xl lg:text-4xl mb-6'>Stay Connected With Us</h1>
                <div className='mx-auto w-100 lg:w-1/3 flex flex-col'>
                    <input type="text" placeholder="Type here" className="input p-2 m-1  input-bordered " />

                    <input type="text" placeholder="Type here" className="input  p-2 m-1 input-bordered " />

                    <textarea type="text" placeholder="Type here" className="input textarea h-20 p-2 m-1 input-bordered " />
                </div>
                <br />
                <Button className="w-1/4 mx-auto">Submit</Button>
            </div>
    );
};

export default ContactForm;
import React from 'react';
import chair from '../../assets/images/chair.png'
import Button from '../Button';

const Banner = () => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" />
                <div className='w-1/2 akign-left'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>GET STARTED</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
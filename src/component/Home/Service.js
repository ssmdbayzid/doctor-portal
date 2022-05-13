import React from 'react';
import service1 from '../../assets/images/fluoride.png'
import service2 from '../../assets/images/cavity.png'
import service3 from '../../assets/images/whitening.png'

const Service = () => {
    return (
        <div>
            <h3 className='text-secondary font-bold text-center'>OUR SERVICE</h3>
            <h3 className='text-accent text-2xl text-center'>Service We Provide</h3>
            <div className='grid gap-4 md:grid-cols-1 lg:grid-cols-3 mt-12'>
                <div class="card  p-8 w-96 bg-white shadow-2xl">
                    <figure><img src={service1} alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="text-2xl text-center">
                            Fluoride Treatment
                        </h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div class="card  p-8 w-96 bg-white shadow-2xl">
                    <figure><img src={service2} alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="text-2xl text-center">
                            Fluoride Treatment
                        </h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div class="card  p-8 w-96 bg-white shadow-2xl">
                    <figure><img src={service1} alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="text-2xl text-center">
                            Fluoride Treatment
                        </h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;
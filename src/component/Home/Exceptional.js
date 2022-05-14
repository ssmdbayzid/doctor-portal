import React from 'react';
import Button from '../Button';
import treatment from '../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div class="hero  min-h-screen">
            <div class="hero-content w-3/4 flex-col lg:flex-row">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                <div class="pl-12">
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>GET STARTED</Button>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;
import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import SigleReview from './SigleReview';

const Review = () => {
    const users = [
        {
            _id: 1,
            name: 'Winson Herry',
            country: 'Pakistan',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Laila',
            country: 'Bangladesh',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id: 3,
            name: 'Molla Omar',
            country: 'Afganisthan',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        },
    ]
    return (
        <div>
            <div className='flex justify-between mt-16'>
                <div>
                    <p className='text-primary font-bold'>Testimonial</p>
                    <h1 className='text-2xl'>What Our Patients Says</h1>
                </div>
                <img className='lg:w-48  w-24' src={quote} alt="quote" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    users.map(user =>
                        <SigleReview
                            key={user._id}
                            user={user}

                        ></SigleReview>
                    )}
            </div>
            
        </div>
    );
};

export default Review;
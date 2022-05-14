import React from 'react';

const SingleInfo = ({tittle, details, img, bg}) => {

    return (

            <div class={` p-5 card text-white lg:card-side shadow-xl ${bg}`}>
                <figure><img src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{tittle}</h2>
                    <p>{details}</p>
                </div>
            </div>
    );
};

export default SingleInfo;
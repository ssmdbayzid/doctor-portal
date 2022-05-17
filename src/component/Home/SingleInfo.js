import React from 'react';

const SingleInfo = ({tittle, details, img, bg}) => {

    return (

            <div className={` p-5 card text-white w-full lg:card-side shadow-xl ${bg}`}>
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tittle}</h2>
                    <p>{details}</p>
                </div>
            </div>
    );
};

export default SingleInfo;
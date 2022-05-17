import React from 'react';

const Service = ({name}) => {

    return (
        <div className='text-secondary text-center font-bold rounded-l-md py-10 px-16 drop-shadow-xl bg-white'>
            <h1>{name}</h1>
        </div>
    );
};

export default Service;
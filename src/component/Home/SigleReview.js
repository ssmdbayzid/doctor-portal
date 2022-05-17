import React from 'react';

const SigleReview = ({ user }) => {
    const { name, country, comment, img } = user
    return (
        <div className="card mt-12 shadow-lg">
            <div className="card-body">
                <p>{comment}</p>
                <div className="card-actions flex items-center align-center justify-center">
                    <div className="avatar mt-2 pr-2">
                        <div className="w-24 w-3/4  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{country}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SigleReview;
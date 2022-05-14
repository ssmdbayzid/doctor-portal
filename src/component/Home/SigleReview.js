import React from 'react';

const SigleReview = ({ user }) => {
    const { name, country, comment, img } = user
    return (
        <div class="card mt-12 shadow-2xl">
            <div class="card-body">
                <p>{comment}</p>
                <div class="card-actions flex items-center align-center justify-center">
                    <div>
                        <img src={img} alt="user" />
                    </div>
                    <div>
                        <h2 class="card-title">{name}</h2>
                        <p>{country}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SigleReview;
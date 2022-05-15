import React from 'react';

const SigleReview = ({ user }) => {
    const { name, country, comment, img } = user
    return (
        <div class="card mt-12 shadow-lg">
            <div class="card-body">
                <p>{comment}</p>
                <div class="card-actions flex items-center align-center justify-center">
                    <div class="avatar mt-2 pr-2">
                        <div class="w-24 w-3/4  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
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
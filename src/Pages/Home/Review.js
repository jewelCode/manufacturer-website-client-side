import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
            <div class="avatar px-10 pt-10 mx-auto">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                    <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
                </div>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{review.name}</h2>
                    <p>Review: {review.comments}</p>
                    <p>Ratings: {review.ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
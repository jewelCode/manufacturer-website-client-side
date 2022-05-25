import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card-body">
            <h2 class="card-title">Name:{review.name}</h2>
            <p>Comments: {review.comments}</p>
            <div class="card-actions justify-start">
                <div class="rating">
                    <h3>{review.ratings} Star</h3>
                </div>
            </div>
        </div>
    );
};

export default Review;
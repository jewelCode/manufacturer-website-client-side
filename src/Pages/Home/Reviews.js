import React from 'react';

const Reviews = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <div class="rating">
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Reviews;
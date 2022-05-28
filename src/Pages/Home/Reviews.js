import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://fast-shelf-13273.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mt-5">
            <h2 className="text-6xl text-center mt-5 text-sky-700 mt-5">Testimonials</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1 justify-items-center">

                {
                    reviews.map(review => <Review review={review} key={review._id}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
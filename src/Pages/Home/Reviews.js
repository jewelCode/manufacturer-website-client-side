import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            {
                reviews.map(review => <Review review={review} key={review._id}></Review>)
            }
        </div>
    );
};

export default Reviews;
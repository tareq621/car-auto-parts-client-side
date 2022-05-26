import React, { useState } from 'react';
import customerrReview from '../../images/icon/icons8-customer-review-64.png'
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    return (
        <div>
            <div className='flex justify-center items-center mb-4'>
                <img src={customerrReview} alt="" />
                <h2 className='text-primary text-3xl mb-4 font-semibold'>Customer Reviews</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
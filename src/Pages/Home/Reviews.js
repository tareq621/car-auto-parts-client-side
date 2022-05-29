import React, { useState } from 'react';
import customerReview from '../../images/icon/icons8-customer-review-64.png'
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    fetch('https://guarded-brook-34447.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    return (
        <div>
            <div className='flex justify-center items-center mb-4'>
                <img src={customerReview} alt="" />
                <h2 className='text-primary text-3xl mb-4 font-semibold'>Our Client Say</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
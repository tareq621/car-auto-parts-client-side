import React from 'react';

const Review = (props) => {
    const { name, ratings, review } = props.review;
    return (
        <div className="card w-96 bg-slate-100 text-black">
            <div className="card-body">
                <h2 className="card-title">Ratings: {ratings}</h2>
                <p>{review}</p>
                <h6>Name: <span className='text-secondary'>{name}</span></h6>
            </div>
        </div>
    );
};

export default Review;
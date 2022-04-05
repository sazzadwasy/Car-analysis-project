import React, { useEffect, useState } from 'react';
import useReviews from '../Hooks/useReviews';
import './Review.css'

const Review = () => {
    const [reviews] = useReviews()

    return (
        <div className="review-container">
            {
                reviews.map(review => (
                    <div className='review'>
                        <h6>{review.name}</h6>
                        <p>{review.review}</p>
                        <p className='text-orange-600 font-semibold'>Rating : {review.ratings}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Review;
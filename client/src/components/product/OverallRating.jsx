import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function ProductOverallRating({rating=0, totalReviews}) {
  return (
        <div className="flex gap-5">
        <div className="rating-container">
            {[...Array(5)].map((val, index) => (
            <FontAwesomeIcon key={index} icon={faStar} size="xl" color="#ffe234"/>  
            ))}      
        </div>
        <div className="text-gray-500 font-bold">
            {rating === 0? 'Belum ada ulasan': 'Lorem ipsum'}
        </div>
        </div>
    );
}

import React from 'react';

export default function ProductReview({ username, picture, stars, review }) {
  const renderStars = (stars) => {
    const totalStars = 5;
    return (
      <div className="flex items-center">
        {[...Array(totalStars)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill={index < stars ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-5 h-5 ${index < stars ? 'text-yellow-500' : 'text-gray-300'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.25l-6.16 3.24 1.17-6.83-4.96-4.84 6.87-1 3.07-6.22 3.07 6.22 6.87 1-4.96 4.84 1.17 6.83z"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white py-8 rounded">
      <div className="flex items-center space-x-4 mb-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={picture}
          alt={`${username}'s profile`}
        />
        <div>
          <h4 className="font-semibold text-lg">{username}</h4>
          <div className="flex items-center">
            {renderStars(stars)}
            <span className="ml-2 text-gray-500">{stars} out of 5</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600">{review}</p>
    </div>
  );
}

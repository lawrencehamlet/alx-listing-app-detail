import React from 'react';

const Star: React.FC<{ filled?: boolean }> = ({ filled }) => (
  <span className={`text-sm ${filled ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
);

const ReviewSection: React.FC<{ reviews?: any[] }> = ({ reviews = [] }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.length === 0 && <p className="text-gray-600">No reviews yet.</p>}

      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex items-center mb-2">
            <img
              src={review.avatar || '/assets/placeholder.jpg'}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
              onError={(e) => ((e.target as HTMLImageElement).src = '/assets/placeholder.jpg')}
            />
            <div>
              <p className="font-bold">{review.name}</p>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < Math.round(review.rating)} />
                ))}
                <span className="ml-2 text-sm text-gray-600">{review.rating}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;

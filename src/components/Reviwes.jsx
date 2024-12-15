import React from 'react';

function Reviews() {
  const reviews = [
    { id: 1, text: "The recipes are amazing and easy to follow!", rating: 5 },
    { id: 2, text: "I love the variety of dishes available!", rating: 4 },
  ];

  return (
    <section className="container mx-auto my-12">
      <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800">{review.text}</p>
            <div className="mt-4">
              {Array.from({ length: review.rating }).map((_, index) => (
                <span key={index} className="text-yellow-500">★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, index) => (
                <span key={index} className="text-gray-300">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;

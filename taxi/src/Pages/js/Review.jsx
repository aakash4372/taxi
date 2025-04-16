import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/Review.css';

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      review: "This product completely transformed my workflow. The ease of use and powerful features are unmatched in the market.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "UX Designer",
      review: "I've tried many similar tools, but none come close to the intuitive interface and robust functionality offered here.",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Product Manager",
      review: "Our team's productivity increased by 40% after implementing this solution. Highly recommended for any business.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Marketing Director",
      review: "The customer support is exceptional. They went above and beyond to help us integrate with our existing systems.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="review-slider-container">
      <div className="review-slider">
        <div className="review-card-wrapper">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className={`review-card ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="card">
                <div className="card-body text-center">
                  <p className="review-text">{review.review}</p>
                  <div className="reviewer-info d-flex flex-column align-items-center">
                    {/* <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="reviewer-avatar img-fluid"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://via.placeholder.com/150"
                      }}
                    /> */}
                    <div className="text-center mt-1">
                      <h5 className="reviewer-name mb-1">{review.name}</h5>
                      {/* <p className="reviewer-position text-muted">{review.position}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="slider-controls">
          <button className="slider-btn prev-btn" onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button className="slider-btn next-btn" onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
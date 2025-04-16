import React from 'react';
import { Button } from 'react-bootstrap';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { TbHandFinger } from "react-icons/tb";
import '../css/Home.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="overlay">
        <div className="content mt-28 text-center text-white">
          <h1 className="display-5 fw-bold mb-4">One Way Drop Taxi Salem</h1>
          <p className="lead mb-4">
            <strong>One way drop taxi salem</strong> provides outstation one way drop and round trip taxi in salem and all over tamilnadu Bangalore.
          </p>
          <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center">
            <Button variant="outline-secondary" size="lg" className="d-flex align-items-center gap-2">
              <TbHandFinger /> Get Fare
            </Button>
            <Button variant="outline-secondary" size="lg" className="d-flex align-items-center gap-2">
              <FaPhoneAlt /> Call
            </Button>
            <Button variant="outline-secondary" size="lg" className="d-flex align-items-center gap-2">
              <FaWhatsapp /> Whatsapp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about-section  position-relative">
      <Container className="my-5 py-5">
        <Row className="align-items-center">
          <Col md={12} lg={7}>
            <h2 className="mb-4 section-title">One Way Drop Taxi Salem</h2>
            <p className="section-text">
              Looking for a reliable one way drop taxi in Salem? We offer
              comfortable and affordable one-way and round trip taxi services
              from Salem to anywhere in Tamil Nadu and Bangalore. Whether it's a
              quick drop or a planned outstation trip, One Way Drop Taxi Salem
              is here to serve you with punctual, safe, and budget-friendly
              rides.{" "}
            </p>
          </Col>
        </Row>
      </Container>

      {/* Image at the very right of the screen */}
      <div className="about-img-wrapper d-none d-lg-block">
        <img
          src="/img/about.png"
          alt="One Way Drop Taxi Service in Salem"
          className="about-img"
          data-aos="fade-left"
          data-aos-delay="300"
        />
      </div>
    </div>
  );
};

export default About;

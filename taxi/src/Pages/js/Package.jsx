import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SlNote } from "react-icons/sl";
import { RiRoadMapLine } from "react-icons/ri";
import { BsTaxiFront } from "react-icons/bs";
import '../css/Packages.css'; // Custom styles if needed

const services = [
  {
    icon: <BsTaxiFront size={40} />, // Font Awesome icon for one-way taxi
    title: 'Outstation Oneway Taxi',
    subtitle: '',
    link: 'https://www.taxirider.in/',
  },
  {
    icon: <RiRoadMapLine size={40} />, // Font Awesome icon for round trip
    title: 'Outstation Round Trip',
    subtitle: '',
    link: 'https://www.taxirider.in/',
  },
  {
    icon: <SlNote size={40} />, // Font Awesome icon for blogging
    title: 'Blogging',
    subtitle: 'Tour Packages',
    link: 'https://www.taxirider.in/',
  },
];

const ServiceCards = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} xs={12} md={4} className="text-center">
            <Card className="border-0 service-card">
              <div className="icon-wrapper mb-3">
                {service.icon} {/* Render the icon here */}
              </div>
              <h5>{service.title}</h5>
              {/* {service.subtitle && <p className="text-muted">{service.subtitle}</p>} */}
              <a href={service.link} className="text-primary fw-semibold">
                Get Estimate & Booking. <span role="img" aria-label="pointer">👈</span>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceCards;

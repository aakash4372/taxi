import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { 
  FaTaxi, 
  FaRoute, 
  FaBlog 
} from 'react-icons/fa';
import '../css/Packages.css';

const Packages = () => {
  const services = [
    {
      title: "Outstation Oneway Taxi",
      description: "Get Estimate & Booking.",
      variant: "primary",
      icon: <FaTaxi size={40} />
    },
    {
      title: "Outstation Round Trip",
      description: "Get Estimate & Booking.",
      variant: "success",
      icon: <FaRoute size={40} />
    },
    {
      title: "Blogging Tour Packages",
      description: "Get Estimate & Booking.",
      variant: "info",
      icon: <FaBlog size={40} />
    }
  ];

  return (
    <Container className="packages-section py-5">
      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} md={4}>
            <Card className="h-100 shadow-sm border-0 package-card">
              <Card.Body className="text-center p-4">
                <div className="package-icon mb-3">
                  {service.icon}
                </div>
                <Card.Title as="h3" className="mb-3 fw-bold">
                  {service.title}
                </Card.Title>
                <Card.Text className="mb-4">
                  {service.description}
                </Card.Text>
                <Button 
                  variant={service.variant} 
                  size="lg"
                  className="px-4 py-2 rounded-pill"
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Packages;
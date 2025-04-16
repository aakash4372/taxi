import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../css/Service_car.css'

const services = [
  {
    title: "Hatcpack Ac 4+1",
    img: "/img/car2.png",
    hoverImg: "/img/car1.png",
    oneway: "14 Rs Per Km",
    roundTrip: "12 Rs Per Km",
  },
  {
    title: "Sedan Ac 4+1",
    img: "/img/car2.png",
    hoverImg: "/img/car3.png",
    oneway: "14 Rs Per Km",
    roundTrip: "13 Rs Per Km",
  },
  {
    title: "SUV Ac 7+1",
    img: "img/car3.png",
    hoverImg: "/img/car2.png",
    oneway: "19 Rs Per Km",
    roundTrip: "18 Rs Per Km",
  },
];

const Service_car = () => {
  return (
    <div className="service-section">
       <Container className="">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="service-card text-center shadow-sm p-3">
              <div className="card-img-wrapper">
                <img
                  src={service.img}
                  alt={service.title}
                  className="card-img car-image"
                />
                <img
                  src={service.hoverImg}
                  alt="Hover"
                  className="card-img hover-image"
                />
              </div>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>
                  Oneway Drop: {service.oneway}
                  <br />
                  Round Trip: {service.roundTrip}
                </Card.Text>
                <a href="#" className="estimate-link">
                  Get Estimate & Booking 👇
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
   
  );
};

export default Service_car;

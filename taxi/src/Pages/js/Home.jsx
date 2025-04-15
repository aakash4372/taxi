// import '../css/Home.css';
// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';

// const OutstationTaxi = () => {
//   return (
//     <div className="home_section">
//       <Container className="my-28">
//         <Row className="align-items-center">
//           {/* Content Column */}
//           <Col md={6} className="order-md-1 order-2">
//             <div>
//               <h1 className="display-5 fw-bold mb-4">One Way Drop Taxi Salem</h1>
//               <p className="lead mb-4">
//                 <strong>One way drop taxi salem</strong> provides outstation one way drop and round trip taxi in salem and all over tamilnadu Bangalore
//               </p>
//               <div className="d-flex flex-wrap gap-3 mb-4">
//                 <Button variant="primary" size="lg">Get Fare</Button>
//                 <Button variant="outline-secondary" size="lg">Call</Button>
//                 <Button variant="outline-success" size="lg">Whatsapp</Button>
//               </div>
//             </div>
//           </Col>
          
//           {/* Image Column */}
//           <Col md={6} className="order-md-2 order-1 text-md-start">
//             <div className="p-4">
//               <img 
//                 src="/img/home.jpg" 
//                 alt="Outstation Taxi" 
//                 className=" taxi-image"
//               />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default OutstationTaxi;


import React from 'react';
import { Button } from 'react-bootstrap';
import '../css/Home.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="overlay">
        <div className="content text-center text-white">
          <h1 className="display-5 fw-bold mb-4">One Way Drop Taxi Salem</h1>
          <p className="lead mb-4">
            <strong>One way drop taxi salem</strong> provides outstation one way drop and round trip taxi in salem and all over tamilnadu Bangalore.
          </p>
          <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center">
            <Button variant="primary" size="lg">Get Fare</Button>
            <Button variant="outline-secondary" size="lg">Call</Button>
            <Button variant="outline-success" size="lg">Whatsapp</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
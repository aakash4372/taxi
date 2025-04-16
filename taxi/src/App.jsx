import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from './Pages/js/Navbar';
import Home from './Pages/js/Home';
import Packages from './Pages/js/Package';
import Service_car from './Pages/js/Service';
import About from './Pages/js/About';
import Review from './Pages/js/Review';
import WhyChooseUs from './Pages/js/Whychoose';

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <Home/>
      <Packages/>
      <Service_car/>
      <About/>
      <Review/>
      <WhyChooseUs/>
    </div>
  );
}

export default App;
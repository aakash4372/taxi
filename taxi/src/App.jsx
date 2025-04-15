import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from './Pages/js/Navbar';
import Home from './Pages/js/Home';
import Packages from './Pages/js/Package';

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <Home/>
      {/* <Packages/> */}
    </div>
  );
}

export default App;
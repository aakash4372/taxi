import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import '../css/Navbar.css';

const NavbarSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight * 0.2;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Why Choose', href: '#why-choose' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={`transition-all duration-500 ${scrolled ? 'bg-white shadow-md' : 'glass-navbar'}`}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home" className="flex items-center">
          <img
            src="/img/taxi-logo.png" // Replace with your image path
            alt="Logo"
            width={130}
          />
        </Navbar.Brand>

          {/* Desktop Navigation - hidden on md and below */}
          <Nav className="d-none d-lg-flex ms-auto">
            {navLinks.map((link, index) => (
              <Nav.Link
              key={index}
              href={link.href}
              className={`mx-2 px-3 py-2 rounded-md font-medium transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-purple-600 hover:bg-gray-100 scrolled' 
                  : 'text-white hover:text-purple-200 hover:bg-white/20'
              }`}
            >
              {link.name}
            </Nav.Link>
            ))}
          </Nav>

          {/* Mobile menu button - shown on md and below */}
          <Button
            variant="outline-none"
            className="d-lg-none border-0 focus:outline-none focus:ring-0"
            onClick={() => setShowOffcanvas(true)}
            aria-label="Open navigation menu"
          >
            <Bars3Icon className={`h-8 w-8 ${scrolled ? 'text-gray-700' : 'text-gray-700'}`} />
          </Button>
        </Container>
      </Navbar>

      {/* Offcanvas Mobile Menu */}
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        className="w-64"
      >
        <Offcanvas.Header className="flex justify-between items-center w-full border-b border-gray-200 glass-navbar">
          <Offcanvas.Title className="flex items-center">
          <img
            src="/img/taxi-logo.png" // Replace with your image path
            alt="Logo"
            width={80}
          />
          </Offcanvas.Title>
          <Button
            variant="outline-none"
            className="border-0 focus:outline-none focus:ring-0"
            onClick={() => setShowOffcanvas(false)}
            aria-label="Close navigation menu"
          >
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body className="glass-navbar">
          <Nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link, index) => (
              <Nav.Link
                key={index}
                href={link.href}
                className="px-4 py-3 rounded-md font-medium text-white hover:text-purple-200 hover:bg-white/20 transition-colors duration-300"
                onClick={() => setShowOffcanvas(false)}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarSection;
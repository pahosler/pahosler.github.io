import React from 'react';
//import { Navbar, Nav } from 'react-bootstrap';
import Menu from './Menu.js';
import Home from './Home.js';
import About from './About.js';
import Portfolio from './Portfolio';
import AboutSeparator from './AboutSeparator.js';
import PortfolioSeparator from './PortfolioSeparator.js';
import Services from './Services.js';
import Testimonials from './Testimonials.js';
import ContactSeparator from './ContactSeparator.js';
import Contact from './Contact.js';

export default function App() {
  return (
    <div>
      <Menu />
      <Home />
      <About />
      <AboutSeparator />
      <Portfolio />
      <PortfolioSeparator />
      <Services />
      <Testimonials />
      <ContactSeparator />
      <Contact />
    </div>
  );
}

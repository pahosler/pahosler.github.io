import React, { Component } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import { Navbar, Nav } from 'react-bootstrap';
import Menu from './Menu.js';
import Home from './Home.js';
import About from './About.js';
import Portfolio from './Portfolio';
import AboutSeparator from './AboutSeparator.js';
import PortfolioSeparator from './PortfolioSeparator.js';
import Services from './Services.js';
import Testimonials from './Testimonials.js';
import ContactSeparator from './ContactSeparator.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false
    };

    this.toggle = {
      menu: this.handleMenuToggle.bind(this)
    };
  }

  toggleMenu() {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }

  handleMenuToggle = () => {
    $('#menuToggle').toggleClass('active');
    $('#root').toggleClass('body-push-toleft');
    $('#theMenu').toggleClass('menu-open');
  };

  render() {
    return (
      <div>
        <Menu toggle={this.toggle} />
        <Home />
        <About />
        <AboutSeparator />
        <Portfolio />
        <PortfolioSeparator />
        <Services />
        <Testimonials />
        <ContactSeparator />
      </div>
    );
  }
}

export default App;

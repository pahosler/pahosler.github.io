import React from 'react';
import $ from 'jquery';

export default function Menu(props) {
  const handleMenuToggle = () => {
    $('#menuToggle').toggleClass('active');
    $('#root').toggleClass('body-push-toleft');
    $('#theMenu').toggleClass('menu-open');
  };

  return (
    <div data-spy="scroll" data-offset="0" data-target="#theMenu">
      <nav className="menu" id="theMenu">
        <div className="menu-wrap">
          <h1 className="logo">
            <a href="index.html#home">Design NOLA</a>
          </h1>
          <i className="fa fa-times menu-close" onClick={handleMenuToggle} />
          <a href="#home" className="smoothScroll">
            Home
          </a>
          <a href="#about" className="smoothScroll">
            About
          </a>
          <a href="#portfolio" className="smoothScroll">
            Portfolio
          </a>
          <a href="#services" className="smoothScroll">
            Services
          </a>
          <a href="#contact" className="smoothScroll">
            Contact
          </a>
          <a
            href="https://facebook.com/pahosler67"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook fa-lg" />
          </a>
          <a
            href="https://twitter.com/pahosler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter fa-lg" />
          </a>
          <a
            href="https://github.com/pahosler/pahosler.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github fa-lg" />
          </a>
          <a href="#contact">
            <i className="fa fa-envelope fa-lg" />
          </a>
        </div>
        <div id="menuToggle" onClick={handleMenuToggle}>
          <i className="fa fa-bars fa-2x fa-fw" />
        </div>
      </nav>
    </div>
  );
}

import React from 'react';

export default function Menu(props) {
  let toggle = props.toggle;
  return (
    <div data-spy="scroll" data-offset="0" data-target="#theMenu">
      <nav className="menu" id="theMenu">
        <div className="menu-wrap">
          <h1 className="logo">
            <a href="index.html#home">Design NOLA</a>
          </h1>
          <i className="fa fa-times menu-close" onClick={toggle.menu} />
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
          <a href="https://facebook.com/pahosler67" target="_blank">
            <i className="fa fa-facebook" />
          </a>
          <a href="https://twitter.com/pahosler" target="_blank">
            <i className="fa fa-twitter" />
          </a>
          <a href="https://github.com/pahosler" target="_blank">
            <i className="fa fa-github" />
          </a>
          <a href="#contact">
            <i className="fa fa-envelope" />
          </a>
        </div>
        <div id="menuToggle" onClick={toggle.menu}>
          <i className="fa fa-bars fa-2x fa-fw" />
        </div>
      </nav>
    </div>
  );
}

import React from 'react';
import backgroundImg from './assets/img/new-orleans-creole-queen.jpg';

export default function ContactSeparator(props) {
  const sep = {
    background: `url(${backgroundImg})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '450px',
    position: 'relative',
    MozFilter: 'grayscale(100%)',
    WebkitFilter: 'grayscale(100%)',
    filter: 'grayscale(100%)'
  };

  return <div style={sep} data-stellar-background-ratio="0.5" />;
}

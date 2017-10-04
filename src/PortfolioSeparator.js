import React from 'react';
import backgroundImg from './assets/img/jackson-square-night-2.jpg';

export default function PortfolioSeparator(props) {
  const sep = {
    background: `url(${backgroundImg})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: '50% 0 !important',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '450px',
    position: 'relative',
    WebkitFilter: 'grayscale(100%)',
    filter: 'grayscale(100%)'
  };

  return <div style={sep} data-stellar-background-ratio="0.5" />;
}

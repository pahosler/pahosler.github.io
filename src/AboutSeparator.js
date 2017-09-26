import React from 'react';
import backgroundImg from './assets/img/web-developer.jpg';

export default function AboutSeparator(props) {
  const sep = {
    background: `url(${backgroundImg}`,
    backgroundAttachment: 'fixed',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    height: '450px',
    position: 'relative'
  };

  return <div style={sep} data-stellar-background-ratio="0.5" />;
}

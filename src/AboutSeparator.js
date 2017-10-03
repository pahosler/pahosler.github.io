import React from 'react';
import backgroundImg from './assets/img/web-developer.jpg';

export default function AboutSeparator(props) {
  const sep = {
    background: `url(${backgroundImg})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    height: '450px',
    position: 'relative'
  };

  return <div style={sep} />;
}

//    msFilter: `"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${backgroundImg}', sizingMethod='scale')"`,

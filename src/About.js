import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import myphoto from './assets/img/pahosler-1.jpg';

export default function About(props) {
  const sentences = [
    'New Orleans is a treasure trove of artistic inspiration.',
    'The cities storied history alone could keep a creative person busy.',
    'Combine that with an abundance of art, music, atmosphere, and amazing cuisine...',
    'Well my friends, the possibilities are absolutely endless!',
    'Let me design your customized web facing presence.',
    'I use modern tools and design philosophies keeping everything mobile first.',
    'Using responsive design techniques ensures visitors are able to see your content.',
    'No webpage or web address? No problem! I can set that up for you too.'
  ];

  const imgStyle = {
    margin: '0 auto'
  };

  const textJustify = {
    textAlign: 'justify'
  };

  return (
    <div>
      <section id="about" name="about" />
      <div id="aboutwrap">
        <Grid>
          <Row>
            <Col lgOffset={1} lg={2} className="name">
              <Image style={imgStyle} src={myphoto} width={250} responsive />
              <p>Paul Hosler</p>
              <div className="name-label" />
            </Col>
            <Col lgOffset={1} lg={8} className="name-desc">
              <h2>
                TALENTED DESIGNER & <br />FRONT-END DEVELOPER<br />LIVING THE
                DREAM IN NEW ORLEANS
              </h2>
              <div className="name-zig" />
              <Col style={textJustify} md={6}>
                {sentences.splice(0, 4).join(' ')}
              </Col>
              <Col style={textJustify} md={6}>
                {sentences.splice(0, 4).join(' ')}
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

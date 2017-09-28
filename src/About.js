import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import myphoto from './assets/img/pahosler-1.jpg';

export default function About(props) {
  const dummySentences = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    'Donec hendrerit tempor tellus.',
    'Donec pretium posuere tellus.',
    'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Nulla posuere.',
    'Donec vitae dolor.',
    'Nullam tristique diam non turpis.',
    'Cras placerat accumsan nulla.',
    'Nullam rutrum.',
    'Nam vestibulum accumsan nisl.'
  ];

  const imgStyle = {
    margin: '0 auto'
  };

  return (
    <div>
      <section id="about" name="about" />
      <div id="aboutwrap">
        <Grid>
          <Row>
            <Col lg={2} className="name">
              <Image style={imgStyle} src={myphoto} width={250} responsive />
              <p>Paul Hosler</p>
              <div className="name-label" />
            </Col>
            <Col lg={8} className="name-desc">
              <h2>
                TALENTED DESIGNER &<br />FRONT-END DEVELOPER<br />LIVING THE
                DREAM IN NEW ORLEANS
              </h2>
              <div className="name-zig" />
              <Col md={6}>{dummySentences.slice(0, 4).join(' ')}</Col>
              <Col md={6}>{dummySentences.slice(0, 4).join(' ')}</Col>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

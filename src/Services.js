import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default function Services(props) {
  const textStyle = {
    color: '#767676',
    textAlign: 'justify',
    lineHeight: '17px'
  };

  return (
    <div>
      <section id="services" name="services" />
      <div id="servicewrap">
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2} className="centered">
              <h1>AN OVERVIEW OF MY SERVICES</h1>
              <h3>I do all the work for you</h3>
              <p>
                Your time is valuable. I take care of everything, so you don't
                have to.
              </p>
            </Col>
          </Row>

          <Row className="mt">
            <Col lg={3} className="service">
              <i className="fa fa-star" />
              <p>
                PERMIUM QUALITY<br />
                <small>GRAPHICS, CONTENT & CODE</small>
              </p>
              <p style={textStyle}>
                High definition, premium graphics. Professionally written
                content. Secure, fast, web tested code.
              </p>
            </Col>
            <Col lg={3} className="service">
              <i className="fa fa-cloud" />
              <p>
                CLOUD SERVICES<br />
                <small>HEROKU, DOCKER, & AWS</small>
              </p>
              <p style={textStyle}>
                Your web apps deployed to the cloud. Flat rates available,
                please contact me for more information.
              </p>
            </Col>
            <Col lg={3} className="service">
              <i className="fa fa-lock" />
              <p>
                SECURED ACCOUNTS<br />
                <small>VERIFIED HTTPS CERTIFICATES</small>
              </p>
              <p style={textStyle}>
                All hosting accounts provided and set up by me are HTTPS
                enabled. Contact me to find out why this is important.
              </p>
            </Col>
            <Col lg={3} className="service">
              <i className="fa fa-thumbs-up" />
              <p>
                100% SATISFACTION<br />
                <small>NO HASSLE GUARANTEE</small>
              </p>
              <p style={textStyle}>
                It's your webpage, if you don't like any of my design choices, I
                will fix them at no additional cost!
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

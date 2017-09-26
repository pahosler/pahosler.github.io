import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default function Services(props) {
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

  return (
    <div>
      <section id="services" name="services" />
      <div id="servicewrap">
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2} className="centered">
              <h1>AN OVERVIEW OF MY SERVICES</h1>
              <h3>I do all the work for you</h3>
              <p>{dummySentences.splice(0, 1)}</p>
            </Col>
          </Row>

          <Row className="mt">
            <Col lg={3} className="service">
              <i className="fa fa-star" />
              <p>
                PERMIUM QUALITY<br />
                <small>LOREM IPSUM DOLOR</small>
              </p>
              <p className="text">{dummySentences.splice(0, 1)}</p>
            </Col>
            <Col lg={3} className="service">
              <i className="fa fa-cloud" />
              <p>
                CLOUD SERVICES<br />
                <small>LOREM IPSUM DOLOR</small>
              </p>
              <p className="text">{dummySentences.splice(0, 1)}</p>
            </Col>
            <Col lg={3} className="service">
              <i className="fa fa-shield" />
              <p>
                SECURED ACCOUNTS<br />
                <small>LOREM IPSUM DOLOR</small>
              </p>
              <p className="text">{dummySentences.splice(0, 1)}</p>
            </Col>
            <Col lg={3} className="service">
              <i className="fa fa-heart" />
              <p>
                100% SATISFACTION<br />
                <small>LOREM IPSUM DOLOR</small>
              </p>
              <p className="text">{dummySentences.splice(0, 1)}</p>
            </Col>
          </Row>

          <Row className="mt">
            <Col lg={3} className="service">
              <i className="fa fa-trophy" />
              <p>
                PERMIUM QUALITY<br />
                <small>LOREM IPSUM DOLOR</small>
              </p>
              <p className="text">{dummySentences.splice(0, 1)}</p>
            </Col>
            <Col lg={3} className="service">
              <i className="fa fa-globe" />
              <p>
                CLOUD SERVICES<br />
                <small>LOREM IPSUM DOLOR</small>
              </p>
              <p className="text">{dummySentences.splice(0, 1)}</p>
            </Col>
            <Col lg={3} className="service">
              <i className="fa fa-lock" />
              <p>
                SECURED ACCOUNTS<br />
                <small>LOREM IPSUM DOLOR</small>
              </p>
              <p className="text">{dummySentences.splice(0, 1)}</p>
            </Col>
            <Col lg={3} className="service">
              <i className="fa fa-thumbs-up" />
              <p>
                100% SATISFACTION<br />
                <small>LOREM IPSUM DOLOR</small>
              </p>
              <p className="text">{dummySentences.splice(0, 1)}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

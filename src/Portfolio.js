import React from 'react';
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import port01 from './assets/img/portfolio/calculator-screenshot.png';
import port02 from './assets/img/portfolio/recipebox-screenshot.png';
import port03 from './assets/img/portfolio/tictactoe-screenshot.png';
import port04 from './assets/img/portfolio/wiki-viewer-screenshot.png';
import port05 from './assets/img/portfolio/quote-machine-screenshot.png';
import port06 from './assets/img/portfolio/simon-screenshot.png';

export default function Portfolio(props) {
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
      <section id="portfolio" name="portfolio" />
      <div id="portfoliowrap">
        <Grid>
          <Row>
            <h1>SOME OF MY LATEST WORKS</h1>

            <Col lg={4} md={4} sm={4} xs={12} className="desc">
              <div className="project-wrapper">
                <div className="project">
                  <div className="photo">
                    <a
                      className="fancybox"
                      href="https://pahosler.com/wikiviewer"
                      target="_blank"
                    >
                      <Image src={port04} alt="" responsive />
                    </a>
                  </div>
                  <div className="overlay>" />
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} sm={4} xs={12} className="desc">
              <div className="project-wrapper">
                <div className="project">
                  <div className="photo">
                    <a
                      className="fancybox"
                      href="http://pahosler.com/quotemachine"
                      target="_blank"
                    >
                      <Image src={port05} alt="" responsive />
                    </a>
                  </div>
                  <div className="overlay>" />
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} sm={4} xs={12} className="desc">
              <div className="project-wrapper">
                <div className="project">
                  <div className="photo">
                    <a
                      className="fancybox"
                      href="https://pahosler.com/simon"
                      target="_blank"
                    >
                      <Image src={port06} alt="" responsive />
                    </a>
                  </div>
                  <div className="overlay>" />
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt">
            <Col lg={4} md={4} sm={4} xs={12} className="desc">
              <div className="project-wrapper">
                <div className="project">
                  <div className="photo">
                    <a
                      className="fancybox"
                      href="https://pahosler.com/calulator"
                      target="_blank"
                    >
                      <Image src={port01} alt="" responsive />
                    </a>
                  </div>
                  <div className="overlay>" />
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} sm={4} xs={12} className="desc">
              <div className="project-wrapper">
                <div className="project">
                  <div className="photo">
                    <a
                      className="fancybox"
                      href="assets/img/portfolio/port02.jpg"
                    >
                      <Image src={port02} alt="" responsive />
                    </a>
                  </div>
                  <div className="overlay>" />
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} sm={4} xs={12} className="desc">
              <div className="project-wrapper">
                <div className="project">
                  <div className="photo">
                    <a
                      className="fancybox"
                      href="https://pahosler.com/tictactoe"
                      target="_blank"
                    >
                      <Image src={port03} alt="" responsive />
                    </a>
                  </div>
                  <div className="overlay>" />
                </div>
              </div>
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Row className="mt centered">
            <h1>MY DESIGN PROCESS</h1>
            <Col lg={4} className="proc">
              <i className="fa fa-coffee" />
              <h3>The Meeting</h3>
              <p>{dummySentences.slice(0, 4).join(' ')}</p>
            </Col>
            <Col lg={4} className="proc">
              <i className="fa fa-cogs" />
              <h3>The Ideas</h3>
              <p>{dummySentences.slice(0, 4).join(' ')}</p>
            </Col>
            <Col lg={4} className="proc">
              <i className="fa fa-heart" />
              <h3>The Product</h3>
              <p>{dummySentences.slice(0, 4).join(' ')}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

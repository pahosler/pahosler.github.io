import React from 'react';
import { Grid, Row, Col, Carousel, Image } from 'react-bootstrap';
import t1 from './assets/img/pic-t1.jpg';
import t2 from './assets/img/pic-t2.jpg';
import t3 from './assets/img/pic-t3.jpg';

export default function Testimonials(props) {
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
    <div id="testimonials">
      <Grid>
        <Row>
          <Col lg={8} lgOffset={2} className="mt">
            <Carousel defaultActiveIndex={0} controls={false}>
              <Carousel.Item>
                <div className="mb centered">
                  <h3>MARK WEBBER</h3>
                  <p>{dummySentences.slice(0, 5).join(' ')}</p>
                  <p>
                    <Image circle src={t1} width={80} />
                  </p>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="mb centered">
                  <h3>PAUL LEVINGSTON</h3>
                  <p>{dummySentences.slice(0, 5).join(' ')}</p>
                  <p>
                    <Image circle src={t2} width={80} />
                  </p>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="mb centered">
                  <h3>LUCY LENNIN</h3>
                  <p>{dummySentences.slice(0, 5).join(' ')}</p>
                  <p>
                    <Image circle src={t3} width={80} />
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

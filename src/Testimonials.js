import React from 'react';
import { Grid, Row, Col, Carousel, Image } from 'react-bootstrap';
import t1 from './assets/img/pic-t1.jpg';
import t2 from './assets/img/pic-t2.jpg';
import t3 from './assets/img/pic-t3.jpg';

export default function Testimonials(props) {
  const textBox = {
    textAlign: 'center'
  };

  const testimonials = [
    {
      name: 'DAVID ROY',
      img: t1,
      quote: [
        'Paul really helped us out!',
        'He had no problem at all handling some last minute changes we threw at him.',
        'I think he may be the first person who actually listened to our ideas,',
        'and then put the time and effort into implementing them.',
        "Best of all he seems to really enjoy what he's doing!"
      ]
    },
    {
      name: 'ALLAN MACARTY',
      img: t2,
      quote: [
        'Thank you for the great ideas. Your attention to detail was phenominal and',
        'you hit every request on point. Would I use your services again? Absolutely',
        'yes. I have paid much more for a lot less work.',
        "You're easy to work with and you definitely go the extra mile."
      ]
    },
    {
      name: 'TAMMY WATTS',
      img: t3,
      quote: [
        'As an indie author on a tight budget you can probably imagine the difficulty',
        'finding someone who can turn your vision into reality. I needed a simple,',
        'professional, and good looking landing page to showcase a few of my recent titles.',
        'Paul did a fantastic job and made sure',
        'I was very happy with the end results.'
      ]
    }
  ];

  return (
    <div id="testimonials">
      <Grid>
        <Row>
          <Col lg={8} lgOffset={2} className="mt">
            <Carousel defaultActiveIndex={0} controls={false}>
              <Carousel.Item>
                <div className="mb centered">
                  <h3>{testimonials[0].name}</h3>
                  <p style={textBox}>
                    {testimonials[0].quote.slice(0, 5).join(' ')}
                  </p>
                  <p>
                    <Image circle src={t1} width={80} />
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="mb centered">
                  <h3>{testimonials[1].name}</h3>
                  <p style={textBox}>
                    {testimonials[1].quote.slice(0, 5).join(' ')}
                  </p>
                  <p>
                    <Image circle src={t2} width={80} />
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="mb centered">
                  <h3>{testimonials[2].name}</h3>
                  <p>{testimonials[2].quote.slice(0, 5).join(' ')}</p>
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

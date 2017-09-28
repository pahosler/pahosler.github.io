import React from 'react';
import {
  Grid,
  Row,
  Col,
  Thumbnail,
  Button,
  ButtonToolbar
} from 'react-bootstrap';
import port01 from './assets/img/portfolio/calculator-screenshot.png';
import port02 from './assets/img/portfolio/recipebox-screenshot.png';
import port03 from './assets/img/portfolio/tictactoe-screenshot.png';
import port04 from './assets/img/portfolio/wiki-viewer-screenshot.png';
import port05 from './assets/img/portfolio/quote-machine-screenshot.png';
import port06 from './assets/img/portfolio/simon-screenshot.png';
import port07 from './assets/img/portfolio/pomodoro-screenshot.png';

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

  const colStyle = {
    marginTop: '25px'
  };

  const works = [
    {
      name: 'calculator',
      img: port01,
      url: 'http://pahosler.com/calculator/',
      src: 'https://github.com/pahosler/freecodecamp/tree/master/www/calculator'
    },
    {
      name: 'recipe box',
      img: port02,
      url: 'https://pahosler.github.io/recipebox/',
      src: 'https://github.com/pahosler/recipebox'
    },
    {
      name: 'tic tac toe',
      img: port03,
      url: 'http://pahosler.com/tictactoe/',
      src: 'https://github.com/pahosler/freecodecamp/tree/master/www/tictactoe'
    },
    {
      name: 'wiki viewer',
      img: port04,
      url: 'http://pahosler.com/wikiviewer/',
      src: 'https://github.com/pahosler/freecodecamp/tree/master/www/wikiviewer'
    },
    {
      name: 'quote machine',
      img: port05,
      url: 'http://pahosler.com/quotemachine/',
      src:
        'https://github.com/pahosler/freecodecamp/tree/master/www/quotemachine'
    },
    {
      name: 'simon',
      img: port06,
      url: 'http://pahosler.com/simon/',
      src: 'https://github.com/pahosler/freecodecamp/tree/master/www/Simon'
    },
    {
      name: 'pomodoro',
      img: port07,
      url: 'http://pahosler.com/pomodoro/',
      src: 'https://github.com/pahosler/freecodecamp/tree/master/www/pomodoro'
    }
  ];

  const ShowWork = props => (
    <Col lg={4} md={4} sm={4} xs={12} style={colStyle}>
      <Thumbnail src={props.thumb.img} bsSize="small" alt="242x200">
        <h3>{props.thumb.name.toUpperCase()}</h3>
        <p>Cool Project</p>

        <ButtonToolbar>
          <Button
            bsStyle="danger"
            bsSize="xs"
            href={props.thumb.url}
            target="_blank"
          >
            Run
          </Button>
          <Button
            bsStyle="info"
            bsSize="xs"
            href={props.thumb.src}
            target="_blank"
          >
            Source
          </Button>
        </ButtonToolbar>
      </Thumbnail>
    </Col>
  );

  return (
    <div>
      <section id="portfolio" name="portfolio" />
      <div id="portfoliowrap">
        <Grid>
          <Row>{works.map((data, i) => <ShowWork key={i} thumb={data} />)}</Row>
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

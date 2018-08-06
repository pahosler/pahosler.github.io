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
import port08 from './assets/img/new-orleans-night-3.jpg';
import port09 from './assets/img/portfolio/hurriup-org-screenshot.png';

export default function Portfolio(props) {
  const colStyle = {
    marginTop: '25px'
  };

  const textStyle = {
    textAlign: 'justify'
  };

  const works = [
    {
      name: 'hurriup.org',
      img: port09,
      url: 'http://hurriup.org',
      src: '',
      desc: 'Custom Landing Page'
    },
    {
      name: 'calculator',
      img: port01,
      url: 'http://pahosler.com/calculator/',
      src:
        'https://github.com/pahosler/freecodecamp/tree/master/www/calculator',
      desc: 'Custom sprite sheets edited with gimp'
    },
    {
      name: 'recipe box',
      img: port02,
      url: 'https://pahosler.github.io/recipebox/',
      src: 'https://github.com/pahosler/recipebox',
      desc: 'Project with local storage'
    },
    {
      name: 'tic tac toe',
      img: port03,
      url: 'http://pahosler.com/tictactoe/',
      src: 'https://github.com/pahosler/freecodecamp/tree/master/www/tictactoe',
      desc: 'Fun game with an unbeatable AI'
    },
    {
      name: 'wiki viewer',
      img: port04,
      url: 'http://pahosler.com/wikiviewer/',
      src:
        'https://github.com/pahosler/freecodecamp/tree/master/www/wikiviewer',
      desc: 'Get a list of Wiki articles with wiki-api'
    },
    {
      name: 'quote machine',
      img: port05,
      url: 'http://pahosler.com/quotemachine/',
      src:
        'https://github.com/pahosler/freecodecamp/tree/master/www/quotemachine',
      desc: 'Fun random quotes'
    },
    {
      name: 'simonsays',
      img: port06,
      url: 'http://pahosler.com/simon/',
      src: 'https://github.com/pahosler/freecodecamp/tree/master/www/Simon',
      desc: 'Play SimonSays, easy or strict mode'
    },
    {
      name: 'pomodoro',
      img: port07,
      url: 'http://pahosler.com/pomodoro/',
      src: 'https://github.com/pahosler/freecodecamp/tree/master/www/pomodoro',
      desc: 'Time your work and break habits'
    },
    {
      name: 'Portfolio Page',
      img: port08,
      url: '#',
      src: 'https://github.com/pahosler/pahosler.github.io',
      desc: 'This portfolio page'
    }
  ];

  const ShowWork = props => (
    <Col lg={4} md={4} sm={4} xs={12} style={colStyle}>
      <Thumbnail
        className="thumbs"
        src={props.thumb.img}
        bsSize="small"
        alt="Placeholder 242x200"
      >
        <h3>{props.thumb.name.toUpperCase()}</h3>
        <p>{props.thumb.desc}</p>

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
          <Row>
            {works.map((data, i) => (
              <ShowWork key={i} thumb={data} />
            ))}
          </Row>
        </Grid>
      </div>
      <div id="portfoliowrap">
        <Grid>
          <Row className="mt centered">
            <h1>MY DESIGN PROCESS</h1>
            <Col lg={4} className="proc">
              <i className="fa fa-coffee" />
              <h3>The Meeting</h3>
              <p style={textStyle}>
                Face to face, online, or telephone. We will discuss your needs
                and goals. This helps me to learn more about you and your
                company or product. Any questions you might have will be
                answered honestly. We'll set timelines for large projects and
                discuss any additional fees upfront.
              </p>
            </Col>
            <Col lg={4} className="proc">
              <i className="fa fa-cogs" />
              <h3>The Ideas</h3>
              <p style={textStyle}>
                If you have look and style ideas in mind, I can design them. If
                you don't, that's okay too. I will match a style to your
                business type, and incorporate your already established brand
                and logo into the design. If you are a startup and still looking
                for branding ideas or a logo, I will be happy to assist you.
              </p>
            </Col>
            <Col lg={4} className="proc">
              <i className="fa fa-trophy" />
              <h3>The Product</h3>
              <p style={textStyle}>
                Your webpage is a reflection of you and your business. You won't
                be getting a cookie cutter (copy and pasted) design. You will
                get a custom designed site taylored to you and your business.
                You will make the final approval before your site goes live. Any
                design or content changes are included with no additional fees
                before your site is uploaded for public viewing.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

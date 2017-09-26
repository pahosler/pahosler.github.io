import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import backgroundImg from './assets/img/new-orleans-night-3.jpg';

export default function Home(props) {
  const headerWrap = {
    background: `url(${backgroundImg}) no-repeat center top`,
    marginTop: '0',
    paddingTop: '120px',
    textAlign: 'center',
    backgroundAttachment: 'relative',
    backgroundPosition: 'center center',
    minHeight: '700px',
    width: '100%',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover'
  };

  const styleH1 = {
    color: '#aa8500',
    marginTop: '90px',
    paddingBottom: '30px',
    letterSpacing: '8px',
    fontSize: '100px',
    fontWeight: 'bold',
    textShadow: '2px 2px 2px #000'
  };

  return (
    <div>
      <section id="home" name="home" />
      <div style={headerWrap}>
        <Grid>
          <Row className="show-grid">
            <Col md={6} mdOffset={3}>
              <h1 style={styleH1}>DESIGN NOLA</h1>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

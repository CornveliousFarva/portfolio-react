import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Footer from './footer';

const Landing = (props) => {
  return (
    <div class="homepage-div">
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col>
              <h1 className="display-3">Greg Schuman</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3> Software Engineer | Full-Stack Web Developer</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Code. Build. Repeat. Always learning and building</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Footer />
    </div>
  );
};

export default Landing;
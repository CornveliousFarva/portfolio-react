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
              <h2> Software Engineer | Full-Stack Web Developer</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>I code and I know things. Making projects happen for people.</h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Footer />
    </div>
  );
};

export default Landing;
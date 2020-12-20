import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';
import Footer from './footer'


const Projects = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardImg top width="100%" src="/images/Quiz-Cards.png" alt="Index Cards" />
            <CardBody>
              <CardTitle tag="h5">Index Cards</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">HTML, CSS, and JavaScript.</CardSubtitle>
                  <CardText>Quiz cards designed to test the user's knowledge on a subject or subjects</CardText>
                  <a href="https://cornveliousfarva.github.io/quiz-cards/"><Button color="primary">Project</Button></a>
                  <a href="https://github.com/CornveliousFarva/quiz-cards"><Button color="secondary">GitHub</Button></a>
                </CardBody>
              </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top width="50%" src="/images/password-generator.png" alt="Password Generator" />
              <CardBody>
                <CardTitle tag="h5">Password Generator</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">HTML, CSS, and JavaScript.</CardSubtitle>
                    <CardText>Password generator for security of personal and professional accounts.</CardText>
                      <a href="https://cornveliousfarva.github.io/password-generator/"><Button color="primary">Project</Button></a>
                      <a href="https://github.com/CornveliousFarva/password-generator"><Button color="secondary">GitHub</Button></a>
                </CardBody>
              </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top width="100%" src="/images/club-crest-red-portfolio.png" alt="Carlsbad Kopites" />
              <CardBody>
                  <CardTitle tag="h5">Official Livepool FC Supporters Club-Carlsbad, California</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">React JS and Reactsrap.</CardSubtitle>
                      <CardText>Website for a soccer team's supporters group designed to give it more visibility.</CardText>
                        <a href="https://carlsbad-kopites.netlify.app"><Button color="primary">Project</Button></a>
                        <a href="https://github.com/CornveliousFarva/olsc-carlsbad "><Button color="secondary">GitHub</Button></a>
                </CardBody>
      </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardImg top width="100%" src="/images/Quote-Generator.png" alt="Quote Generator" />
              <CardBody>
                <CardTitle tag="h5">Quote Generator </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">React</CardSubtitle>
                    <CardText>Quote generator with buttons to share to social media</CardText>
                      <a href="https://cornveliousfarva.github.io/quote-generator/"><Button color="primary">Project</Button></a>
                      <a href="https://github.com/CornveliousFarva/quote-generator"><Button color="secondary">GitHub</Button></a>
                </CardBody>
      </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top width="100%" src="/images/cloneify.png" alt="Cloneify" />
              <CardBody>
                <CardTitle tag="h5">Cloneify</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">React</CardSubtitle>
                  <CardText>Spotify Search App</CardText>
                    <a href="https://cloneify.netlify.app"><Button color="primary">Project</Button></a>
                    <a href="https://github.com/CornveliousFarva/cloneify"><Button color="secondary">Github</Button></a>
              </CardBody>
          </Card>
        </Col>
        <Col>
        
        </Col>
      </Row>
      <Row>
        <Col>
        
        </Col>
        <Col>
        
        </Col>
        <Col>
        
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Projects;
            
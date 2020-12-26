import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from './footer';
import './about.css'


const About = (props) => {
  return(
    <Container fluid>
      <Row>
        <Col><h1>About Me</h1></Col>
      </Row>
      <Row>
        <Col>
        <p>My name is Greg Schuman. After eight years of inventory management, I realized that my analytical problem-solving skills were more catered to coding. The thing I like the most about coding is that it doesn't demand perfection, just excellence and being able to learn to fail.</p>
        <p>What piqued my interest and began my journey into coding began in 2019 when I accidentally discovered the inspect tool on Google Chrome. I spent about 10 minutes playing around with a site, which gave me the inspiration to sign up for coding bootcamp at UC San Diego.</p>
        <p>When I'm not coding, I'm usually watching sports, enjoing a good local beer or whiskey, or running. I'm also trying to learn sign language and an instrument.</p>
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}

export default About;


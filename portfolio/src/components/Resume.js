import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Resume = (props) => {
  return (
    <Container fluid>
      <Row xs="2">
        <Col>
        <h1>Greg Schuman</h1>
        <h2>Oceanside, CA</h2>
        <h3>760-877-1725</h3>
        </Col>
        <Col>
          <h1>Summary</h1>
          <p></p>
        </Col>
        <Col>
          <h1>Education</h1>
          <p> University of California, San Diego, San Diego, California, 2019-2020
            <li>Certificate in Fpl-Stack Web Development</li>
          </p>
          <p> Central Michigan University, Mount Pleasant, Michigan, 2011-2014
            <li>Bachelor of Science, Political Science</li>
          </p>
          <p> MiraCosta College, Oceanside, California, 2007-2011
            <li>Associate of Arts, History</li>
          </p>
        </Col>
        <Col><h1>Professional Experience</h1>
        
        </Col>
      </Row>
      </Container>
  )
}
export default Resume;
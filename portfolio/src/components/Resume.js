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
        <Col>
          <h1>Professional Experience</h1>
          <p> 2012-Present
            <li>Demonstrated leadership and productivity by establishing written protocols on inventory management and shipping ad receiving duties, complete with guides on troubleshooting common and uncommon errors and item locations</li>
            <li>Utilized problem-solving skills to solve technical problems with various software, showing dedication to the position.</li>
            <li>Trained and demonstrated to upper management and coworkers proficiency in shipping and inventory software.</li>
            <li>Researched new vendors on cleaning supplies due to shortage from our current ones.</li>
            <li>Gave technical support on computers when needed, showing dedication for technology.</li>
            <li>Collaborated with different departments to coordinate efforts to minimize disruption of workflow and processing of shipments.</li>
          </p>
          <p> Cutstomer Service Representative, AM PM, Carlsbad, CA, 2008-2012
            <li>Increased customer satisfaction by 50%, going above and beyond the scope of my responsibilities to provide a positive customer experience.</li>
            <li>During a major power outage, showed leadership by taking charge of the store, securing all valuable assets and mitigating any potential for an escalation of tensions.
            </li>
            <li>
            Conducted training of new employees on store policies and procedures.
            </li>
          </p>
        
        </Col>
      </Row>
      </Container>
  )
}
export default Resume;
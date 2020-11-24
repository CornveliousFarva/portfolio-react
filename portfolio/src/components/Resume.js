import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from '/footer'

const Resume = (props) => {
  return (
    <Container fluid>
      <Row xs="2">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Footer />
      </Container>
  )
}
export default Resume;
import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    
} from "@fortawesome/free-brands-svg-icons";
import { faBlog, faEnvelope, } from '@fortawesome/free-solid-svg-icons'

function Footer(){
    return(
        <Container fluid>
            <Row>
                <Col><FontAwesomeIcon icon={faGithub} size="3x" href="https://github.com/CornveliousFarva"></FontAwesomeIcon></Col>
                <Col><FontAwesomeIcon icon={faLinkedin} size="3x" href="https://www.linkedin.com/in/greg-schuman/"></FontAwesomeIcon></Col>
                <Col><FontAwesomeIcon icon={faEnvelope} size="3x"></FontAwesomeIcon>greg.c.schuman@gmail.com </Col>
                <Col><FontAwesomeIcon icon={faBlog} size="3x"></FontAwesomeIcon></Col>
            </Row>
            <Row>
                <Col>Copyright, Greg Schuman, 2020</Col>
            </Row>
        </Container>
    )
}

export default Footer
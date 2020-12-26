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
                <Col><a href="https://github.com/CornveliousFarva"><FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon></a></Col>
                <Col><a href="https://www.linkedin.com/in/greg-schuman/"><FontAwesomeIcon icon={faLinkedin} size="3x"></FontAwesomeIcon></a></Col>
                <Col><a href="mailto:greg.c.schuman@gmail.com" class="email"><FontAwesomeIcon icon={faEnvelope} size="3x"></FontAwesomeIcon></a></Col>
                <Col><FontAwesomeIcon icon={faBlog} size="3x"></FontAwesomeIcon></Col>
            </Row>
            <Row className="copyright">
                <Col>Copyright, Greg Schuman, 2020</Col>
            </Row>
        </Container>
    )
}

export default Footer
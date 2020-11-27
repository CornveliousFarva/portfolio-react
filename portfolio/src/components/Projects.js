import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';


const Projects = (props) => {
  return (
    <CardGroup>
       <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Index Cards</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">HTML, CSS, and JavaScript.</CardSubtitle>
                  <CardText>Quiz cards designed to test the user's knowledge on a subject or subjects</CardText>
                  <a href="https://cornveliousfarva.github.io/quiz-cards/"><Button color="primary">Project</Button></a>
                  <a href="https://github.com/CornveliousFarva/quiz-cards"><Button color="secondary">GitHub</Button></a>
                </CardBody>
              </Card>
      <Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Password Generator</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">HTML, CSS, and JavaScript.</CardSubtitle>
                <CardText>Password generator for security of personal and professional accounts.</CardText>
                  <a href="https://cornveliousfarva.github.io/password-generator/"><Button color="primary">Project</Button></a>
                  <a href="https://github.com/CornveliousFarva/password-generator"><Button color="secondary">GitHub</Button></a>
                </CardBody>
              </Card>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Official Livepool FC Supporters Club-Carlsbad, California</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">React JS and Reactsrap.</CardSubtitle>
                <CardText>Website for a soccer team's supporters group designed to give it more visibility.</CardText>
                  <a href="https://carlsbad-kopites.netlify.app"><Button color="primary">Project</Button></a>
                  <a href="https://github.com/CornveliousFarva/olsc-carlsbad "><Button color="secondary">GitHub</Button></a>
                </CardBody>
      </Card>
      <Card>
        
      </Card>
    </CardGroup>
  );
};

export default Projects;
            
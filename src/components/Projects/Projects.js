import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
function Projects() {
  document.title = "Dhruvil 👨‍💻 - Projects";
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              hasGh={false}
              hasDemo={true}
              title="Std10"
              description="This PWA is usefull for students who are in Standard 10 rigth now. This website contains best lectures of Maths and Science."
              ghLink="https://github.com/DhruvilMoradiya/dMovies"
              demoLink="https://standard-10.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              hasGh={false}
              hasDemo={true}
              title="WhatsMe"
              description="Chat with anyone on WhatsApp without saving their number. This is also in form of PWA so you can also install it on Windows & Android."
              ghLink="https://github.com/DhruvilMoradiya/dMovies"
              demoLink="https://whatsme05.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              hasGh={false}
              hasDemo={true}
              title="dMovies"
              description="This is the web app where you can cast of movies and trailor & BTS of movies. This web app is devloped with ReactJS & TMDB API."
              ghLink="https://github.com/DhruvilMoradiya/dMovies"
              demoLink="https://dmoviesdb.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              hasGh={true}
              hasDemo={true}
              title="Std09"
              description="This website is usefull for students who are in Standard 09 rigth now. This website contains best lectures of Maths and Science. Built with HTML & CSS"
              ghLink="https://github.com/DhruvilMoradiya/Std9"
              demoLink="https://std9.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              hasGh={true}
              hasDemo={true}
              title="Har Ghar Tiranga"
              description="This is the web app where you can make your Har Ghar Tiranga poster with your name and photo."
              ghLink="https://github.com/DhruvilMoradiya/Har-Ghar-Tiranga"
              demoLink="https://harghartiranga.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title className="blue">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* jo github hoy to hasGh true aapvu atle Github nu button aavshe nahitar github nu btn nah aave */}

        {props.hasGh && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; Github
          </Button>
        )}

        {"\n"}
        {"\n"}

        {/* jo demo hoy to hasDemo true aapvu atle Demo button aavshe nahitar nai aave  */}

        {props.hasDemo && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

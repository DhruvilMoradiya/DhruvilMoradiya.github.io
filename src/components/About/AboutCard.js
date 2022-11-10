import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Dhruvil Moradiya </span>
            from <span className="blue"> Morbi, Gujrat, India.</span>
            <br />I am a fresher pursuing BE in Electronics & Communication at LDCE-Ahmedabad.             <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#00C2FC" }}>
            "Try hard and hard wheather you are successfull or not."{" "}
          </p>
          <footer className="blockquote-footer">Dhruvil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

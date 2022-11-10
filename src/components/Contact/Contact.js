import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";

function Contact() {
  document.title = "Dhruvil 👨‍💻 - Contact";
  const form = useRef();
  // console.log(form);
  const [msgOnBtn, setmsgOnBtn] = useState("Submit");
  const [nameValue, setnameValue] = useState("");
  const [emailValue, setemailValue] = useState("");
  const [subjectValue, setsubjectValue] = useState("");
  const [msgValue, setmsgValue] = useState("");

  const namechangeHandler = (e) => {
    // console.log(e);
    setnameValue(e.target.value);
  };
  const emailchangeHandler = (e) => {
    // console.log(e);
    setemailValue(e.target.value);
  };
  const subjectchangeHandler = (e) => {
    // console.log(e);
    setsubjectValue(e.target.value);
  };
  const msgchangeHandler = (e) => {
    // console.log(e);
    setmsgValue(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setmsgOnBtn("Sending");
    emailjs
      .sendForm(
        "service_a00tfga",
        "template_1nr0b6p",
        form.current,
        "pTuo0ZgIZN3_Hddrk"
      )
      .then(
        (result) => {
          setmsgOnBtn("Sent Successfully");
          setnameValue("");
          setemailValue("");
          setmsgValue("");
          setsubjectValue("");
          setTimeout(() => {
            setmsgOnBtn("Submit");
          }, 2000);
        },
        (error) => {
          //alert(error.text);
        }
      );
  };

  return (
    <Container className="contact-section">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} sm>
          <Form ref={form} onSubmit={sendEmail}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGroupName">
                <Form.Control
                  type="text"
                  value={nameValue}
                  onChange={namechangeHandler}
                  placeholder="Name"
                  name="user_name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGroupEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={emailValue}
                  onChange={emailchangeHandler}
                  name="user_email"
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupSubject">
              <Form.Control
                type="text"
                value={subjectValue}
                onChange={subjectchangeHandler}
                placeholder="Subject"
                name="subject"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupMessage">
              <Form.Control
                as="textarea"
                rows={3}
                value={msgValue}
                onChange={msgchangeHandler}
                placeholder="Message..."
                name="message"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {msgOnBtn}
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="blue">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://www.instagram.com/dhruvil.moradiya/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/917990740133"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:dhruvil1808@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/DhruvilMoradiya"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

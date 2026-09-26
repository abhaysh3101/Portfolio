import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setDone(true);
        form.current.reset();
        setTimeout(() => setDone(false), 3500);
      } else {
        console.error("Error:", result.error);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ''}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstName" placeholder="First Name" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" placeholder="Last Name" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" placeholder="Email" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" placeholder="Phone No." required />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" placeholder="Message" required />
                        <button type="submit" style={{ borderRadius: '10px' }}>
                          <span>Send</span>
                        </button>
                        <br />
                        <h2 className="my-3">{done && "Thanks for Contacting me"}</h2>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

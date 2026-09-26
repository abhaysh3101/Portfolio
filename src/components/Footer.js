import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Github, Twitter } from "react-bootstrap-icons";
import { HashLink } from 'react-router-hash-link';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <HashLink to='#home' style={{ textDecoration: "none", color: "#fff" }}>
              <h2 style={{ fontFamily: 'monospace san-serif', marginTop: '2rem', fontStyle: 'oblique', fontSize: '2rem' }}>ABHAY</h2>
            </HashLink>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-5" >
              <a href="https://www.linkedin.com/in/abhaysh3101/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://x.com/abhaysh3101" target="_blank" rel="noreferrer"><Twitter className="hii" style={{ color: "#fff" }} /></a>
              <a href="https://github.com/abhaysh3101" target="_blank" rel="noreferrer"><Github className="hii" style={{ color: "#fff" }} /></a>
              <a href="https://www.instagram.com/abhay_31.01/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p><span className="fw-bold">Call</span>: +91 8707031321</p>
            <p><span className="fw-bold">Email</span>: abhaysh3101@gmail.com</p>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

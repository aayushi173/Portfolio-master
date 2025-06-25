import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Aayushi_avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered my passion for <b className="purple">data analytics</b> early on—and I’ve been decoding insights ever since. 📊<br />
              <br />I'm fluent in classics like 
              <i>
                <b className="purple"> Python, R, SQL, and C++ </b>
              </i>, and I enjoy using tools like <b className="purple"> Power BI, Tableau, and React</b> to turn data into decisions.
              <br />
              <br />
              My interests lie in building data-driven products, creating intuitive dashboards, and helping organizations uncover hidden trends through &nbsp;
              <i>
                <b className="purple">analytics and visualization.</b>
                
              </i>
              <br />
              <br />
Whenever I can, I channel my curiosity into exploring machine learning, process improvement, and storytelling with data.
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  storytelling with data.
                </b>
              </i>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aayushi173"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aayushi170301/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

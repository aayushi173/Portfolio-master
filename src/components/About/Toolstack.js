import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows,
  SiPycharm,
  SiRstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><div style={{ fontSize: "20px"}}>Visual Studio Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm /><div style={{ fontSize: "20px"}}>PyCharm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio /><div style={{ fontSize: "20px"}}>RStudio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><div style={{ fontSize: "20px"}}>Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /><div style={{ fontSize: "20px"}}>Slack</div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> */}
      {/* </Col> */}
    </Row>
  );
}

export default Toolstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiSqllite,
  DiCss3,
  DiSpark,
} from "react-icons/di";
import { FaFileExcel } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiPowerbi,
  SiRstudio,
  SiTableau,
  SiC,
  SiCplusplus,
  SiMicrosoftexcel,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi/><div style={{ fontSize: "20px"}}>PowerBI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau /><div style={{ fontSize: "20px"}}>Tableau</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel /><div style={{ fontSize: "20px"}}>Microsoft Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio/><div style={{ fontSize: "20px"}}>RStusio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython/><div style={{ fontSize: "20px"}}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite /><div style={{ fontSize: "20px"}}>SQL</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /><div style={{ fontSize: "20px"}}>PostgreSQL</div>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><div style={{ fontSize: "20px"}}>MongoDb</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "20px", textAlign:"center" }}>Hadoop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSpark /><div style={{ fontSize: "20px"}}>Spark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><div style={{ fontSize: "20px"}}>MongoDb</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC /><div style={{ fontSize: "20px"}}> C Language</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus /> <div style={{ fontSize: "20px"}}>C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><div style={{ fontSize: "20px"}}>Java</div>
      </Col>
     
     
      <Col xs={4} md={2} className="tech-icons">
        
        <DiGit /> <div style={{ fontSize: "20px"}}>GitHub</div>
      </Col>
      
      
      
    </Row>
  );
}

export default Techstack;

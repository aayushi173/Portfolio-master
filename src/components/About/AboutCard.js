import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aayushi Patel </span>
            from <span className="purple"> North Carolina, USA.</span>
            <br />
            I am currently studying Masters in Analytics at Georgia Institute of Technology
            <br />
            I have completed Bachelors in Information Technology from P P Savani University, India.
            <br />
            <br />
          </p>
          
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EV from "../../Assets/Projects/EV.png";
import FreightMode from "../../Assets/Projects/FreightMode.png";
import BostonHousing from "../../Assets/Projects/BostonHousing.png";
import NYC from "../../Assets/Projects/NYC.png";
import Superstore from "../../Assets/Projects/Superstore.jpg";
import ProfessionSurvey from "../../Assets/Projects/ProfessionSurvey.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NYC}
              isBlog={false}
              title="NYC Airbnb Data Visualization"
              description={<>This project is an in-depth analysis of the Airbnb market in New York City using Tableau. The project encompasses various aspects of the NYC Airbnb market, such as pricing trends, property types, neighborhoods, and availability.<br></br> <p>Through interactive dashboards and visually engaging charts, the project aims to present the data in a comprehensive and intuitive manner, allowing users to explore and analyze the information easily.</p></>}
              demoLink="https://public.tableau.com/app/profile/aayushi.patel3566/viz/Airbnb_NYC_Analysis/Dashboard1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Superstore}
              isBlog={false}
              title="Superstore Dataset Analysis"
              description={<>The Superstore dataset analysis project utilizes Python, along with popular data analysis libraries like Pandas, NumPy, and Matplotlib, to extract insights and uncover patterns from the dataset. I have conducted a regression analysis to identify factors that impact sales, such as advertising spend and weather patterns.
<p><br></br>
The project aims to deliver actionable insights and recommendations for improving profitability, optimizing inventory management, and enhancing customer satisfaction. By combining Python's data analysis capabilities with the Superstore dataset, this project empowers stakeholders to make informed business decisions. </p></>}
              ghLink="https://github.com/aayushi173/Superstore-Data-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BostonHousing}
              isBlog={false}
              title="Boston Housing Data project"
              description="An analysis of the Boston Housing dataset using Python. In this project, I have investigate whether there is a statistically significant difference in the median value of houses based on their proximity to the Charles River, explored whether there is a difference in the median values of houses based on different proportions of owner-occupied units built before 1940 and identified whether there is a statistically significant relationship between nitric oxide concentrations and the proportion of non-retail business acres per town."
              ghLink="https://github.com/aayushi173/Statistics-for-Data-Science-Project-Case-Boston-Housing-Data-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProfessionSurvey}
              isBlog={false}
              title="Data Profession Survey Breakdown"
              description="This project involves analyzing a survey conducted among individuals working in the field of data. Through this Power BI project, I have conducted a comprehensive analysis that includes a comparison of average salaries across various job titles, an assessment of the perceived difficulty in entering the data field, and the determination of the most favored programming language among survey participants."
              ghLink="https://github.com/aayushi173/Professional_Survey_Breakdown"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EV}
              isBlog={false}
              title="Toronto EV Charging Network ExpansionToronto EV Charging Network Expansion"
              description={<>
    <p>
      This project focuses on optimizing Toronto’s EV charging network by identifying which existing Green P parking locations
      should be converted into charging stations. Using a data-driven approach, the analysis incorporates traffic patterns,
      local business density, and user behavior to guide decision-making.
    </p>
    <ul>
      <li>Analyzed Toronto's Green P Parking data to identify optimal locations for EV charging stations.</li>
      <li>Integrated parking, traffic, and business data and performed geospatial analysis to calculate distances.</li>
      <li>Used KNN to find nearest businesses, average distance, average number of customers, and time spent at businesses.</li>
      <li>Developed an SVM model to predict ideal parking spots based on traffic volume and proximity metrics.</li>
      <li>Ranked parking locations with weighted scores for actionable EV infrastructure expansion insights.</li>
    </ul>
  </>}
              ghLink="https://github.com/aayushi173/EV-Charging-Toronto"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FreightMode}
              isBlog={false}
              title="Freight Mode Transportation Recommender"
              description={<><p>Collaborated to develop a data-driven recommender system to predict the optimal freight transportation mode (e.g., Truck, Rail, Air) using historical TransBorder Freight Data (2006–2024) from the U.S. Department of Transportation. 

The system incorporates machine learning algorithms (notably XGBoost, achieving 90% accuracy), robust data preprocessing, and an interactive web interface powered by FastAPI, D3.js, and SQLite. 

<br></br><p></p>Users input shipment parameters (e.g., weight, origin/destination, commodity type) to receive real-time, interpretable transport recommendations along with visualized historical data. Designed for improved logistics decision-making in North American freight transport.</p></>}
              ghLink="https://github.com/aayushi173/Freight-Mode-Recommender/tree/main"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

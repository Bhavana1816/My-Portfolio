import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Health Management System"
              description="The Health Management System is a comprehensive Software solution designed to Streamline healthcare
              operations.
              • It enables efficient patient registration, appointment scheduling, medical records management, and billing.
              • The system incorporates advanced features like prescription management, laboratory, integration and analytics to
              enhance decision making and improve overall healthcare delivery."
              ghLink="https://github.com/Bhavana Mahagoan4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Efficient Privacy Preserving Data Collection and Computation Off Loading For
              Fog-Assisted IOT"
              description="Efficient privacy preserving data collection and computation offloading for fog-assisted IOT projects aims to
              optimize data gathering and processing in IOT system.
              • It employs privacy-enhancing techniques to protect sensitive information while efficiently
              offloading computational tasks to fog nodes, reducing latency and conserving energy."
              ghLink="https://github.com/Bhavana Mahagoan4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-commerce"
              description="Developed a dynamic e-commerce platform using React.js and Next.js for efficient client-side
              rendering, ensuring a seamless user experience.
              Leveraged HTML and CSS to create a responsive and visually appealing user interface, enhancing
              the overall design Ensured a responsive design with HTML, CSS, and Ant Design, delivering an optimal user
              experience across various devices.."
              ghLink="https://github.com/Bhavana Mahagoan4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

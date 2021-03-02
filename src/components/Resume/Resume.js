import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/MohammedAlenazi_SoftwareEngineering.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button> */}
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Technical Support Specialist [Channels by STC]"
              date="Sep 2018 - Present"
              content={[
                "Responsible for investigate and diagnose incidents to restore a failed IT Service as quickly as possible. Escalate Major Incidents to the Incident or Problem Manager. Verify resolution with end-users and resolve assigned Incidents. In addition, perform daily, weekly or monthly analysis report.",              ]}
            />
            <Resumecontent


              title="Software Engineer - Participant [General Assembly]"
              date="Nov 2019 - Feb 2020"
              content={[
                "Participated in a 3-month program bootcamp of 480+ hrs of in-class, project based certification by GA and Misk Academy.During the bootcamp I successfully executed the following projects.",       ]}
            />
{/* 
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer"
              content={[
                "Worked on creating frontend-end of the websites using Bootstrap, Javascript.",
              ]}
            /> */}
            {/* <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BS - Software Engineering  [Robert Morris University] "
              date="2014 - 2018"
              content={['Engineering approaches to the development of software']}
            />
            <Resumecontent
              title="Software Engineering Immersive Cours [General Assembly]
]"
              date="2019 - 2020"
              content={["Web Development using MERN stack"]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer"
              content={[
                "Worked on creating frontend-end of the websites using Bootstrap, Javascript.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;

import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to AI. Here
          are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              Web Apps
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              Web Apps
            </ToggleButton>
          )}
          <Divider />
          {toggle === "blockchain" ? (
            <ToggleButton
              active
              value="blockchain"
              onClick={() => setToggle("blockchain")}
            >
              Blockchain
            </ToggleButton>
          ) : (
            <ToggleButton
              value="blockchain"
              onClick={() => setToggle("blockchain")}
            >
              Blockchain
            </ToggleButton>
          )}
          <Divider />
          {toggle === "AI" ? (
            <ToggleButton active value="AI" onClick={() => setToggle("AI")}>
              AI & ML
            </ToggleButton>
          ) : (
            <ToggleButton value="AI" onClick={() => setToggle("AI")}>
              AI & ML
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter(
              (item) => toggle === "all" || item.category.includes(toggle)
            )
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;

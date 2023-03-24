import React from "react";
import ProjectCard from "./ProjectsCard/ProjectCard";
import "./ProjectSection.scss";
import SectionHeading from "../Section-Heading/SectionHeading";
import { RxDoubleArrowRight } from "react-icons/rx";

const ProjectSection = () => {
  return (
    <div className="ProjectSectionMainDiv">
      <SectionHeading heading={"Projects"} />
      <div className="ProjectSectionInner">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="btnPrs">
        <span>See More </span>
        <RxDoubleArrowRight className="rightArrow" size={20} />
      </div>
    </div>
  );
};

export default ProjectSection;

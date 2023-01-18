import React from "react";
import AnimatedPage from "../components/AnimatedPage";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <AnimatedPage>
      <div className="h-screen px-16 py-10">Projects</div>
    </AnimatedPage>
  );
};

export default Projects;

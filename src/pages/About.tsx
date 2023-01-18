import React from "react";
import AnimatedPage from "../components/AnimatedPage";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <AnimatedPage>
      <div className="h-screen px-16 py-10 ">test</div>
    </AnimatedPage>
  );
};

export default About;

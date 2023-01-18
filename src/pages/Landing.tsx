import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import Hero from "../components/Hero";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <AnimatedPage>
      <div>
        <Hero />
      </div>
    </AnimatedPage>
  );
};

export default Landing;

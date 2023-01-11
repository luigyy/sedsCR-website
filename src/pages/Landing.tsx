import React from "react";
import Hero from "../components/Hero";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Landing;
